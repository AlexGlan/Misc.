-- finds all dates' Id with higher temperatures compared to its previous dates
SELECT w1.id
FROM weather AS w1, weather AS w2
WHERE w1.temperature > w2.temperature
AND datediff(w1.recordDate, w2.recordDate) = 1;