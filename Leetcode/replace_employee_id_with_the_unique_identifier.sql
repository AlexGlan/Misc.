-- Shows unique ID of each user or replaces its absence with null
SELECT unique_id, name
FROM EmployeeUNI RIGHT JOIN Employees
ON EmployeeUNI.id = Employees.id;