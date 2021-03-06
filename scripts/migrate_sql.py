"""Script for migrating user-specific sqlite databases to a unified postgres
database."""
import asyncio
import asyncpg
import aiofile
import aiobotocore
import aiosqlite
import json
import uuid

from datetime import date
from os import path
from typing import Dict, Union

WINE_DIR = "wine_images"

def get_sqlite_connection():
    return aiosqlite.connect(SQLITE_PATH)

def get_postgres_connection():
    return asyncpg.connect(POSTGRES_CONN_STR, ssl=True)

# Insert grapes, stores, wine_types
async def insert_simple_table(name: str) -> Dict[int, int]:
    old_ids_to_new = {}
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute(f"SELECT id, name FROM {name};") as cursor:
            async for row in cursor:
                new_id = await pg_db.fetchrow(f"INSERT INTO {name} (name, user_id) VALUES ($1, $2) RETURNING {name}.id;",
                                              row[1], USER_ID)
                old_ids_to_new[row[0]] = new_id[0]
    return old_ids_to_new

# Get regions
async def get_region_map() -> Dict[int, int]:
    old_ids_to_new = {}
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute("SELECT id, name FROM regions;") as cursor:
            async for row in cursor:
                new_id = await pg_db.fetchrow("SELECT id FROM regions WHERE name = $1 ;", row[1])
                if new_id is None:
                    raise ValueError(f"No region found with name {row[1]}")
                old_ids_to_new[row[0]] = new_id[0]
    return old_ids_to_new

# Insert producers, viti_areas
async def insert_regions_relation(regions_map: Dict[int, int], relation_name: str) -> Dict[int, int]:
    old_ids_to_new = {}
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute(f"SELECT id, name, region_id FROM {relation_name};") as cursor:
            async for row in cursor:
                new_id = await pg_db.fetchrow(f"INSERT INTO {relation_name} (name, region_id, user_id) VALUES ($1, $2, $3) RETURNING {relation_name}.id",
                                              row[1], regions_map[row[2]], USER_ID)
                old_ids_to_new[row[0]] = new_id[0]
    return old_ids_to_new

async def upload_wine_image(old_id: int) -> Union[str, None]:
    local_path = path.join(MEDIA_DIR, f"{old_id}.png")
    if path.exists(local_path):
        name = uuid.uuid4()
        file_path = path.join(WINE_DIR, str(name))
        async with aiofile.AIOFile(local_path, 'rb') as image_file:
            data = await image_file.read()
        session = aiobotocore.get_session()
        async with session.create_client('s3', region_name='us-east-2',
                                         aws_access_key_id=AWS_ACCESS_KEY,
                                         aws_secret_access_key=AWS_SECRET_KEY) as client:
            resp = await client.put_object(Bucket='vinoteca',
                                           Key=file_path,
                                           Body=data,
                                           ContentType='image/png')
            print(f"Response: {resp}")
        return name

# Insert wines
async def insert_wines(wine_types_map: Dict[int, int], producers_map: Dict[int, int], viti_areas_map: Dict[int, int]) -> Dict[int, int]:
    old_ids_to_new = {}
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute("""
            SELECT id, name, description, notes, why, inventory, rating, color_id,
                wine_type_id, producer_id, viti_area_id
            FROM wines;""") as cursor:

            async for row in cursor:
                image_file = await upload_wine_image(row[0])
                new_id = await pg_db.fetchrow("""
                    INSERT INTO wines (name, description, notes, why, inventory,
                        rating, color_id, wine_type_id, producer_id, viti_area_id, user_id, image)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
                    RETURNING wines.id;""",
                    row[1], row[2], row[3], row[4], row[5], row[6], row[7],
                    wine_types_map[row[8]], producers_map[row[9]],
                    viti_areas_map[row[10]] if row[10] else None, USER_ID, image_file)
                old_ids_to_new[row[0]] = new_id[0]
    return old_ids_to_new

# Insert wine grapes
async def insert_wine_grapes(wines_map: Dict[int, int], grapes_map: Dict[int, int]):
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute("SELECT grape_id, wine_id, percent FROM wine_grapes;") as cursor:
            async for row in cursor:
                await pg_db.execute("INSERT INTO wine_grapes (grape_id, wine_id, percent) VALUES ($1, $2, $3);",
                                    grapes_map[row[0]], wines_map[row[1]], row[2])

# Insert purchases
async def insert_purchases(wines_map: Dict[int, int], stores_map: Dict[int, int]):
    pg_db = await get_postgres_connection()
    async with get_sqlite_connection() as sqlite_db:
        async with sqlite_db.execute("SELECT price, quantity, vintage, memo, store_id, wine_id, date FROM purchases;") as cursor:
            async for row in cursor:
                # Convert int to date
                date_int = row[6]
                if date_int is not None:
                    purchase_date = date(year=date_int // 10_000,
                                        month=date_int % 10_000 // 100,
                                        day=date_int % 100)
                else:
                    purchase_date = None
                if wine_id := wines_map.get(row[5]):
                    await pg_db.execute("INSERT INTO purchases (price, quantity, vintage, memo, store_id, wine_id, date) VALUES ($1, $2, $3, $4, $5, $6, $7);",
                                        row[0], row[1] or 1, row[2], row[3],
                                        stores_map[row[4]] if row[4] else None,
                                        wine_id, purchase_date)

async def main():
    grapes_map, stores_map, wine_types_map, regions_map = await asyncio.gather(
        insert_simple_table("grapes"),
        insert_simple_table("stores"),
        insert_simple_table("wine_types"),
        get_region_map())
    producers_map, viti_areas_map = await asyncio.gather(
        insert_regions_relation(regions_map, "producers"),
        insert_regions_relation(regions_map, "viti_areas"))
    wines_map = await insert_wines(wine_types_map, producers_map, viti_areas_map)
    await asyncio.gather(insert_wine_grapes(wines_map, grapes_map),
                         insert_purchases(wines_map, stores_map))


if __name__ == "__main__":
    with open("migration_conf.json") as fin:
        config = json.load(fin)
    USER_ID = config["user_id"]
    POSTGRES_CONN_STR = config["postgres_connection_str"]
    SQLITE_PATH = config["sqlite_path"]
    MEDIA_DIR = config["media_dir"]
    AWS_ACCESS_KEY = config["aws_access_key"]
    AWS_SECRET_KEY = config["aws_secret_key"]

    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
