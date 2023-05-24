-- query reports patients conditions that start with DIAB1 prefix
SELECT *
FROM patients
WHERE conditions REGEXP "^DIAB1| DIAB1";