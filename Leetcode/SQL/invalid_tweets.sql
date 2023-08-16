-- Query finds IDs of invalid tweets (number of characters is strictly greater than 15)
SELECT tweet_id
FROM tweets
WHERE LENGTH(content) > 15;