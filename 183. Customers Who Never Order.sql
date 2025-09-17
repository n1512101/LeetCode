-- 方法1
SELECT name AS Customers FROM Customers 
WHERE id NOT IN (SELECT DISTINCT customerId FROM Orders);

-- 方法2
SELECT name AS Customers FROM Customers AS c 
LEFT JOIN Orders AS o
ON c.id = o.customerId
WHERE o.id IS NULL;