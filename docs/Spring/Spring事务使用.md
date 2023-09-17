# Spring事务

## 配置开启

SpringBoot不需要任何配置，直接使用@Transaction即可，如果要使用全局事务管理器，则需要自行配置

Spring中使用需要额外配置，方式有以下几种

### 1. 注解配置

```java
@Bean
@Qualifier("transactionManager")
public DataSourceTransactionManager txManager(@Autowired HikariDataSource hikariDataSource){
        return new DataSourceTransactionManager(hikariDataSource);
}
```

### 2. xml配置

```xml
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="hikariDataSource"/>
</bean>
```

## Spring中使用事务

### 1. 全局事务管理

统一配置指定包、类、方法的切面，指定方法的事务隔离级别、超时时间、回滚策略等等；

在具体的方法中，就不需要再添加事务相关的注解，统一管理；xml/代码都可以配置；

```xml
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <tx:method name="add*" isolation="REPEATABLE_READ" timeout="2000" read-only="true" rollback-for="java.lang.Exception"/>
        <tx:method name="insert*"/>
        <tx:method name="delete*"/>
        <tx:method name="update*"/>
        <tx:method name="select*" read-only="true"/>
    </tx:attributes>
</tx:advice>

<aop:config>
    <aop:pointcut id="txPointcut" expression="execution(* com.snippet.springtransaction.service.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointcut"/>
</aop:config>
```

### 2. `@Transaction`注解
- SpringBoot中无需任何配置，直接可以使用@Transaction
- Spring中需要开启；
```java
@Configuration
@EnableTransactionManagement
```

使用时，自行添加@Transaction，需要自行指定回滚方式、事务传播方式等；
```java
@Transactional(rollbackFor = Exception.class)
public void test() {
    // ...
}
```

### 3. 编程式事务

自行指定隔离级别、传播方式、手动commit、rollback；

```java
public void test() {
    DefaultTransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
    transactionDefinition.setIsolationLevel(TransactionDefinition.ISOLATION_DEFAULT); // isolation
    transactionDefinition.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED); // default
    TransactionStatus transaction = transactionManager.getTransaction(transactionDefinition);
    try {
        // ...
        transactionManager.commit(transaction);
    } catch (Exception e) {
        transactionManager.rollback(transaction);
    }
}
```
## 失效注意事项
1、事务方法必须`public`

2、必须能够使用到代理对象；如this调用一个事务方法，AOP不生效；

## 事务传播

目的：当出现多个事务嵌套时，如何组织各个事务的行为；

用例：[事务传播用例](https://github.com/huiru-wang/code-snippet/blob/main/SpringTransaction/src/main/java/com/snippet/springtransaction/service/UserService.java)

`PROPAGATION_REQUIRED`：共用一个事务，如果没有事务，就开启一个新的；

`PROPAGATION_REQUIRES_NEW`：用于子事务上
- 子事务新建一个事务，并把父事务挂起，当前事务单独执行，执行结束不受父事务回滚影响
- 子事务的异常也不会影响到父事务

`PROPAGATION_SUPPORTS`：放在子事务上
- 父事务存在，就用事务
- 不存在，就不用事务

`PROPAGATION_NOT_SUPPORTED`：放在子事务上
- 无论怎么样都不使用事务，如果存在父事务，挂起父事务
- 但是子方法抛出异常，会影响父事务

`PROPAGATION_MANDATORY`：MANDATORY(强制性的)放在父事务，向下嵌套
- 存在父事务，并且是MANDATORY的，如果没有子事务，就抛出异常

`PROPAGATION_NESTED`：放在父事务上，向下嵌套
- 父事务回滚，子事务一起回滚
- 子事务回滚，父事务不受影响；但是子事务的异常，会影响父事务，父事务可能需要catch

`PROPAGATION_NEVER`：用于子事务
- 不使用事务，如果存在父事务，就抛出异常


## 回滚策略

**默认只会回滚`runtimeException`，指定回滚异常，则按指定的异常回滚；**

## 事务其他参数
### 只读事务
单个事务内：
- 如果只有一个查询，没必要开事务；
- 如果存在多个查询，如果不开事务，默认对每个查询开一个事务，可能存在数据不一致情况；**可以对整个方法加只读事务**；

使用：
```java
@Transactional(readOnly = true)
```

### timeout
事务超时时间，默认单位：秒

- 当事务在时间范围内，未执行完成，则回滚；

- 默认没有超时时间，由MySQL决定事务超时时间；

```java
@Transactional(timeout = 20)
```

