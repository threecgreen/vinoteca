CREATE VIEW recent_purchases AS
SELECT DISTINCT ON(wine_id)
    wine_id
    , price
    , quantity
    , vintage
    , memo
    , store_id
    , date
FROM purchases
ORDER BY wine_id, date DESC NULLS LAST;
