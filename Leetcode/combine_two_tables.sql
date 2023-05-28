-- Retrieves full name and address of each person
SELECT firstName, lastName, city, state
FROM person
LEFT JOIN address
ON person.personId = address.personId;