
# MySQL常用SQL

## DDL

### 新增/删除列
```sql
ALTER [table_name] ADD [column_name] VARCHAR(255) DEFAULT NULL comment '';
ALTER [table_name] DROP [column_name];
```

### 修改列
```sql
ALTER [table_name] MODIFY [column_name] DEFAULT [value];
```

### 修改列的默认值
会复制表，效率比较低：
```sql
ALTER [table_name] MODIFY [column_name] DEFAULT [value];
```

直接修改.frm文件中的列定义，效率高：
```sql
ALTER [table_name] ALTER [column_name] SET DEFAULT [value];
```

## 索引

### 索引命名
- 主键：`pk_[field]`
- 唯一索引：`uk_[column]_[column]`
- 普通联合索引：`idx_[column]_[column]`
- 全文索引：`ft_[column]`

### 创建索引
```sql
ALTER TABLE [table_name] ADD INDEX [index_name] (column, column, column);

ALTER TABLE [table_name] ADD UNIQUE (column);

ALTER TABLE [table_name] ADD PRIMARY KEY (column);

CREATE INDEX [index_name] ON [table_name] (column, column, column);

CREATE UNIQUE INDEX [index_name] ON [table_name] (column_list);

CREATE FULLTEXT INDEX [index_name] ON [table_name] (column_list);
```

### 删除索引
```sql
DROP INDEX [index_name] ON [table_name]

ALTER TABLE [table_name] DROP INDEX [index_name]

ALTER TABLE [table_name] DROP PRIMARY KEY
```

### 建表时创建索引
```sql
CREATE TABLE IF NOT EXISTS t_table (
 ....
 INDEX `idx_startTime_category` (`startTime`, `category`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  COLLATE = utf8_general_ci
```

### 查看索引
```sql
SHOW INDEX FROM t_table
```

## 系统级SQL

### 查看修改隔离级别
当前隔离级别：
```sql
show variables like 'transaction_isolation';
```

修改当前SESSION的隔离级别：
```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

### 查看活跃事务
```sql
SELECT trx_id,trx_state,trx_started,trx_isolation_level FROM INFORMATION_SCHEMA.INNODB_TRX;
```
- trx_id 是事务的唯一标识符
- trx_state 表示事务的当前状态
- trx_started 是事务启动的时间戳
- trx_isolation_level 是事务的隔离级别
- trx_unique_checks 表示是否启用唯一键约束的检查
- trx_foreign_key_checks 表示是否启用外键约束的检查

### 关闭自动提交
```sql
set @@autocommit=0;
```


### 查看是否锁表
1. 查看正在使用的表
```sql
SHOW OPEN TABLES WHERE In_use > 0;

+----------+--------+--------+-------------+
| Database | Table  | In_use | Name_locked |
+----------+--------+--------+-------------+
| test     | t_user |      1 |           0 |
+----------+--------+--------+-------------+
```

2. 查看事务状态
```sql
SELECT trx_id,trx_state,trx_started,trx_isolation_level FROM INFORMATION_SCHEMA.INNODB_TRX;

+--------+-----------+---------------------+---------------------+
| trx_id | trx_state | trx_started         | trx_isolation_level |
+--------+-----------+---------------------+---------------------+
|   5545 | LOCK WAIT | 2023-05-03 19:31:05 | REPEATABLE READ     |
|   5544 | RUNNING   | 2023-05-03 19:30:40 | REPEATABLE READ     |
+--------+-----------+---------------------+---------------------+