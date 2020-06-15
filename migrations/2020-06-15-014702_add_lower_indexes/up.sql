CREATE INDEX wine_types_user_name_lower ON wine_types (user_id, lower(name));
CREATE INDEX producers_user_name_lower ON producers (user_id, lower(name));
CREATE INDEX viti_areas_user_name_lower ON viti_areas (user_id, lower(name));
CREATE INDEX regions_name_lower ON regions (lower(name));
