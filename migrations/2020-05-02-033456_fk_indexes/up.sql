CREATE INDEX purchases_wine_id ON purchases (wine_id);
CREATE INDEX wines_producer_id ON wines (producer_id);
CREATE INDEX wines_user_id ON wines (user_id);
CREATE INDEX wines_wine_type_id ON wines (wine_type_id);
CREATE INDEX wines_viti_area_id ON wines (viti_area_id);
CREATE INDEX producers_region_id ON producers (region_id);
CREATE INDEX viti_areas_region_id ON viti_areas (region_id);
CREATE INDEX purchases_wine_id_date ON purchases (wine_id, date DESC NULLS LAST);
