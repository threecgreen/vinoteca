"""Script for deleting S3 objects that aren't referenced in the database."""
import asyncio
import asyncpg
import aiobotocore
import json

from typing import Dict, Union, Set

WINE_DIR = "wine_images"

def get_postgres_connection():
    return asyncpg.connect(POSTGRES_CONN_STR, ssl=True)

async def get_db_images() -> Set[str]:
    pg_db = await get_postgres_connection()
    images = await pg_db.fetch("SELECT image FROM wines WHERE image IS NOT NULL;")
    return {row[0] for row in images}
