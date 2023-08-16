-- Reports all the classes that have at least 5 students
SELECT class
FROM courses
GROUP BY class
HAVING COUNT(class) >= 5;