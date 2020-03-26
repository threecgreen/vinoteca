SELECT
    extract(YEAR FROM p.date) AS year
    , sum(coalesce(p.quantity, 1)) AS quantity
    , sum(p.price) AS total_price
    , avg(p.price) AS avg_price
    -- , avg(p.vintage) AS avg_vintage
FROM purchases p
WHERE p.date IS NOT NULL
GROUP BY extract(YEAR FROM p.date)
ORDER BY p.date / 10000;
