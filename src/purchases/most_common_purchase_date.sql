SELECT to_char(p.date, 'Mon dd') AS most_common_purchase_date
FROM purchases p
INNER JOIN wines w
    ON p.wine_id = w.id
WHERE p.date IS NOT NULL
    AND w.user_id = $1
GROUP BY to_char(p.date, 'Mon dd')
ORDER BY sum(p.quantity) DESC;
