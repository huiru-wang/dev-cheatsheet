
## 两种基本用法

1、值

```sql
case [column] 
    when [key1] then [value1]
    when [key2] then [value2]
    ELSE [value3] 
END
```

2、表达式
```sql
case 
    when [condition1] then [value1]
    when [condition2] then [value2]
    ELSE [value3] 
END
```

```sql
-- tree结构 输出节点类型
+----+------+
| id | p_id |
+----+------+
|  1 | NULL |
|  2 |    1 |
|  3 |    1 |
|  4 |    2 |
|  5 |    2 |
+----+------+

SELECT t.id, 
(CASE 
	WHEN t.p_id IS NULL THEN 'Root'     -- null 为根节点
	WHEN t.id IN (SELECT p_id FROM tree) THEN 'Inner'   -- pid中存在id 为非叶子节点
	ELSE 'Leaf' END) AS Type  -- pid中存在id，为叶子节点
FROM tree t
ORDER BY t.id;

+----+-------+
| id | Type  |
+----+-------+
|  1 | Root  |
|  2 | Inner |
|  3 | Leaf  |
|  4 | Leaf  |
|  5 | Leaf  |
+----+-------+
```

# case when 聚合函数

# case when 变量