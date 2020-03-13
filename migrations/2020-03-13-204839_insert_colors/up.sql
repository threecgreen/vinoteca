-- Insert colors
PRAGMA foreign_keys=OFF;
INSERT INTO colors SELECT 1,'red'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'red');
INSERT INTO colors SELECT 2,'white'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'white');
INSERT INTO colors SELECT 3,'rosé'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'rosé');
INSERT INTO colors SELECT 4,'dessert'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'dessert');
INSERT INTO colors SELECT 5,'sparkling'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'sparkling');
INSERT INTO colors SELECT 6,'port'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'port');
INSERT INTO colors SELECT 7,'cider'
WHERE NOT EXISTS(SELECT 1 FROM colors WHERE name = 'cider');
PRAGMA foreign_keys=ON;
