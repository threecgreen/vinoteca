SELECT
    cast(extract(YEAR FROM p.date) AS INTEGER) AS year
    , sum(p.quantity) AS quantity
    , sum(p.price * p.quantity) AS total_price
    , avg(p.price) AS avg_price
    -- , avg(p.vintage) AS avg_vintage
FROM purchases p
INNER JOIN wines w
    ON p.wine_id = w.id
WHERE p.date IS NOT NULL
    AND w.user_id = $1
GROUP BY extract(YEAR FROM p.date)
ORDER BY extract(YEAR FROM p.date);
