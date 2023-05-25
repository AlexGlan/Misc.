-- Retrieves product information from multiple stores and combines them into a single result set
SELECT product_id, "store1" AS store, store1 AS price
FROM products
WHERE store1 IS NOT NULL
UNION
SELECT product_id, "store2", store2
FROM products
WHERE store2 IS NOT NULL
UNION
SELECT product_id, "store3", store3
FROM products
WHERE store3 IS NOT NULL;