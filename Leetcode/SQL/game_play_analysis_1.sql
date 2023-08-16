-- Reports the first login date for each player
SELECT DISTINCT DISTINCT player_id, MIN(event_date) AS first_login
FROM activity
GROUP BY player_id;