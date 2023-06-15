-- Delete all the duplicate emails, keeping only one email with the smallest id
--
-- With SELECT statement
DELETE FROM person
WHERE id NOT IN (
    SELECT * FROM (
		SELECT MIN(id)
		FROM person
		GROUP BY email
        ) AS temp
);

-- Without SELECT statement
DELETE p1.*
FROM person AS p1, person AS p2
WHERE p1.id > p2.id AND p1.email = p2.email;
