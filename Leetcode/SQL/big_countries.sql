-- Reports the name, population, and area of the given big countries
SELECT name, population, area
FROM world
WHERE population >= 25000000 OR area >= 3000000;