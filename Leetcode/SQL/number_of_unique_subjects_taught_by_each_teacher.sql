-- Counts the number of distinct student IDs associated with each teacher ID
SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt
FROM teacher
GROUP BY teacher_id;