-- reports movies with an odd-numbered ID and a description that is not "boring"
SELECT *
FROM cinema
WHERE id % 2 > 0 AND description != "boring"
ORDER BY rating DESC;