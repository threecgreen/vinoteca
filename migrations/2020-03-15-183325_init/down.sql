-- Remove schema
DROP TABLE "wine_grapes";
DROP INDEX "wine_grapes_grape_id_0e357a67";
DROP INDEX "wine_grapes_wine_id_c0ed5414";
DROP INDEX wine_grapes_wine_id_grape_id_772ad5ca_uniq;
DROP TABLE "colors";
DROP TABLE "grapes";
DROP TABLE "purchases";
DROP INDEX "purchases_store_id_2563c769";
DROP INDEX "purchases_wine_id_7e3b7107";
DROP INDEX "purchases_date_96e1e1f0";
DROP TABLE "stores";
DROP TABLE "wine_types";
DROP TABLE "viti_areas";
DROP INDEX "viti_areas_name_56501cc0";
DROP INDEX "viti_areas_region_id_91a7d558";
DROP TABLE "producers";
DROP INDEX "producers_region_id_a5a7ed5d";
DROP TABLE "regions";
DROP TABLE "wines";
DROP INDEX "wines_inventory_7cc76efa";
DROP INDEX "wines_color_id_86d88962";
DROP INDEX "wines_producer_id_bbb958aa";
DROP INDEX "wines_viti_area_id_26f131c8";
DROP INDEX "wines_wine_type_id_6b4d81d9";