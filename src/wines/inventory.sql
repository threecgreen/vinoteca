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
    , p3.vintage AS last_purchase_vintage
    , max(pu.date) AS last_purchase_date
    , w.inventory AS inventory
    , p3.price AS last_purchase_price
FROM wines w
    LEFT JOIN producers p ON w.producer_id = p.id
    LEFT JOIN regions r ON p.region_id = r.id
    LEFT JOIN colors c ON w.color_id = c.id
    LEFT JOIN wine_types wt ON w.wine_type_id = wt.id
    LEFT JOIN purchases pu ON w.id = pu.wine_id
    LEFT JOIN (
        SELECT
            w2.id
            , max(p2.date) as last_purchase_date
        FROM wines w2
            INNER JOIN purchases p2 ON w2.id = p2.wine_id
        WHERE p2.vintage IS NOT NULL
        GROUP BY w2.id
    ) AS sub ON sub.id = w.id
    LEFT JOIN purchases p3 ON w.id = p3.wine_id
        AND (p3.date = sub.last_purchase_date
            OR sub.last_purchase_date IS NULL)
WHERE w.inventory > 0
GROUP BY w.id
ORDER BY sub.last_purchase_date DESC;
