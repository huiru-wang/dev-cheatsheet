
# MyBatis常用模板

## 批量插入存在则Replace
```sql
<insert id="batchInsertOrUpdate">
    replace into `t_test` (
    `id`,
    `title`,
    `start_time`,
    `num`,
    `version`
    )
    values
    <foreach collection="faultEntities" item="item" index="index" separator=",">
        (#{item.id},  #{item.title}, #{item.startTime}, #{item.num}, #{item.version})
    </foreach>
</insert>
```


## 批量插入存在则Update
1、如果表存在 `NOT NULL` 字段，即使是更新，也要保证非空；

- 如title为NOT NULL，update时对象title为null，则会报错；

2、`num = num + values(num)`
- `num` 为原始值，`values(num)` 为新值

```sql
<insert id="batchInsertOrUpdate">
    insert ignore into `t_test` (
    `id`,
    `title`,
    `start_time`,
    `num`,
    `version`
    )
    values
    <foreach collection="faultEntities" item="item" index="index" separator=",">
        (#{item.id},  #{item.title}, #{item.startTime}, #{item.num}, #{item.version})
    </foreach>
    ON DUPLICATE KEY UPDATE
    `num` = `num` + values(`num`),
    `version` = `version` + 1
</insert>
```


## 批量Update指定字段
```sql
UPDATE `t_test`
<trim prefix="SET" suffixOverrides=",">

    <trim prefix="name = CASE" suffix="END,">
        <foreach collection="items" item="item" index="index">
            WHEN id = #{item.id} THEN #{item.name}
        </foreach>
    </trim>

    <trim prefix="flag = CASE" suffix="END,">
        <foreach collection="items" item="item" index="index">
            WHEN id = #{item.id} THEN #{item.flag}
        </foreach>
    </trim>
</trim>
WHERE id IN (
    <foreach collection="items" index="index" item="item" separator=",">
        #{item.id}
    </foreach>
)
```