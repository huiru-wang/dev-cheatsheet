
# 文件查询

## 查询行数
```shell
# 文件行数
wc -l [filename]

# 过滤后行数
grep [keyword] [filename] | -wc
```

## 显示指定行前后n行
```shell
grep [keyword] [filename] -A n  # 后n行
grep [keyword] [filename] -B n  # 前n行
grep [keyword] [filename] -C n  # 前后n行
```

## 查询结果显示行号
```shell
grep [keyword] [filename] -n
cat [filename] -n
more [filename] | grep 'data' -n
```

## 多文件查询

### 指定多个文件查询
```shell
grep [keyword] [filename] [filename] [filename] ... -n
```

### 正则匹配多文件
```shell
grep -r [keyword] *.log -n

# 目录下所有文件
grep -r [keyword] /etc/
grep -r [keyword] .
```

## 模式匹配
```shell
# 忽略大小写
grep -i 'data' [filename]

# 单词完整匹配
grep -w 'data' [filename]

# 增强模式匹配 相当于 egrep
grep -E 'data' [filename]
# 或
grep -E 'data' -E 'mail' [filename]
grep -E 'data|mail' [filename]
```

## 时间范围查询
```shell
# 2023-09-18 11:22 到 2023-09-18 11:36 之间的数据
egrep "2023-09-18 11:[2-3][2-6]" access.log

# 查询2023-09-04 11:46:05之后数据
awk -F '|' '{if($1 > "2023-09-04 11:46:05") print $1"|"$5}' access.log
```

## 切分提取日志

### awk切分
```shell
awk -F '|' '{print $1"|"$5}' access.log

# ~ 包含
tail -f access.log | awk -F '|' '{ if($5 ~ "keyword1" || $5 ~ "keyword") print $1"|"$5}'

```

### grep切分

- `-o`：仅打印匹配数据

```shell
egrep -o '"text":"[^"]+"' t.log

```

## 查询结果排序

```shell
# 默认字典序升序，使用 -n 表示使用数字排序
cat access.log | sort -n

# 降序
cat access.log | sort -r

# 分割后指定列排序，默认空格分隔，-k指定列数
cat access.log | sort -k 5
cat access.log | sort "|" -k 5

# -o：结果输出到文件
cat access.log | sort -o temp.log
```

如： 提取字符串，并按字符串长度排序

```shell
2023-09-18 11:32:13|INFO|com.example.test.method|{"text":"33131"}
2023-09-18 11:32:34|INFO|com.example.test.method|{"text":"master load"}
2023-09-18 11:32:53|INFO|com.example.test.method|{"text":"lighers"}
------------------------------------------------------------------------------------
# 提取text为key的value，并按照value的长度排序打印
grep -o '"text":"[^"]*"' t.log | awk -F ':"' '{print $2}' | awk -F '"' '{print $1}' | awk '{print length,
 $0}' | sort -n -k 1



## 常用组合
### 指定时间范围、查ERROR前后日志
```shell
grep '2024-03-21 12:5[5-8]' text.txt| grep ERROR -C 10
```






------------------------------------------------------------------------------------
5 33131
7 lighers
11 master load
```
