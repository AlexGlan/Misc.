-- Retrieves name and bonus amount of each employee with a bonus less than 1000 or it's absence
SELECT name, bonus
FROM employee LEFT JOIN bonus
USING(empId)
WHERE bonus < 1000 OR bonus IS NULL;