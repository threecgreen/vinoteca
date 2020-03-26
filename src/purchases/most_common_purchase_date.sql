-- FIXME: use date functionality
SELECT p.date % 10000 + 20000000 AS most_common_purchase_date
FROM purchases p
WHERE p.date IS NOT NULL
GROUP BY p.date % 10000 + 20000000
ORDER BY sum(p.quantity) DESC;
