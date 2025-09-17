SELECT name, bonus FROM Employee AS e
LEFT JOIN Bonus AS b
ON e.empid = b.empid
WHERE Bonus < 1000 OR Bonus IS NULL;