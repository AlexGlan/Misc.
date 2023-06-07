-- Find the employees who earn more than their manager
SELECT emp.name AS Employee
FROM employee AS emp
JOIN employee AS mngmt ON emp.managerId = mngmt.id
WHERE emp.salary > mngmt.salary;