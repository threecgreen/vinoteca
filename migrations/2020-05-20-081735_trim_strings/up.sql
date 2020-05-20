UPDATE colors
SET name = trim(name);
UPDATE grapes
SET name = trim(name);
UPDATE producers
SET name = trim(name);
UPDATE purchases
SET memo = trim(memo);
UPDATE regions
SET name = trim(name);
UPDATE stores
SET name = trim(name);
UPDATE viti_areas
SET name = trim(name);
UPDATE wines
SET name = trim(name),
    description = trim(description),
    notes = trim(notes),
    why = trim(why);
