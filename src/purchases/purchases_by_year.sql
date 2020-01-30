SELECT
    p.date / 10000 AS year
    , sum(coalesce(p.quantity, 1)) AS quantity
    , sum(p.price) AS total_price
    , avg(p.price) AS avg_price
    -- , avg(p.vintage) AS avg_vintage
FROM purchases p
WHERE p.date IS NOT NULL
GROUP BY p.date / 10000
ORDER BY p.date / 10000;
