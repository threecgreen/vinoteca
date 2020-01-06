SELECT p.date % 10000 + 20000000
FROM purchases p
WHERE p.date IS NOT NULL
ORDER BY sum(p.quantity) DESC;
