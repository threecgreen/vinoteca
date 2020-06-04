SELECT
    w.id
    , c.name AS color
    , w.name AS name
    , wt.id AS wine_type_id
    , wt.name AS wine_type
    , p.id AS producer_id
    , p.name AS producer
    , r.id AS region_id
    , r.name AS region
    , rc.vintage AS last_purchase_vintage
    , rc.date AS last_purchase_date
    , w.inventory AS inventory
    , rc.price AS last_purchase_price
FROM wines w
    INNER JOIN producers p ON w.producer_id = p.id
    INNER JOIN regions r ON p.region_id = r.id
    INNER JOIN colors c ON w.color_id = c.id
    INNER JOIN wine_types wt ON w.wine_type_id = wt.id
    LEFT JOIN recent_purchases rc ON rc.wine_id = w.id
WHERE w.inventory > 0
    AND w.user_id = $1
ORDER BY rc.date DESC;
