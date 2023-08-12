
# Kafka

0.11.x之后，offset不再存储zk，zk不适合高并发读写

## 伪分布式部署配置
手动 或 Docker-Compose

```shell
# 新建etc，存放conf
cp ./conf/zookeeper.properties ./etc/zookeeper.properties

cp ./conf/server.properties ./etc/server-0.properties
cp ./conf/server.properties ./etc/server-1.properties
cp ./conf/server.properties ./etc/server-2.properties
```

修改kafka配置：broker.id、listener、log.dirs，不同节点不同即可；

```shell
broker.id=0
listeners=PLAINTEXT://:9092
log.dirs=/tmp/kafka-logs-0
```

启动：

```shell
# zk
./bin/zookeeper-server-start.sh ./etc/zookeeper.properties
# 登录zk
./zookeeper-shell.sh connect localhost:2181

# kafka
./bin/kafka-server-start.sh ./etc/server-0.properties
./bin/kafka-server-start.sh ./etc/server-1.properties
./bin/kafka-server-start.sh ./etc/server-2.properties
```

## 创建Topic
```shell
./kafka-topics.sh \
--zookeeper localhost:2181 \ # zk
--create --topic snippet \   # topic 
--partitions 3 \             # 副本数
--replication-factor 2 \     # 分区数
```

## 查看Topic

```shell
./kafka-topics.sh --zookeeper localhost:2181 --describe --topic snippet
-----------------------------
Topic:snippet   PartitionCount:3        ReplicationFactor:2     Configs:
Topic: snippet  Partition: 0    Leader: 0       Replicas: 0,1   Isr: 0,1
Topic: snippet  Partition: 1    Leader: 1       Replicas: 1,2   Isr: 1,2
Topic: snippet  Partition: 2    Leader: 2       Replicas: 2,0   Isr: 2,0
```
- 3个分区
- 每个分区，2个副本

## 开启生产者消费者
开启消费者

```shell
./kafka-console-consumer.sh \
--bootstrap-server localhost:9092,localhost:9093,localhost:9094 \
--topic snippet
```

开启生产者

```shell
./kafka-console-producer.sh \
--broker-list localhost:9092,localhost:9093,localhost:9094 \
--topic snippet
```

## 查看指定节点所有消费者组

```shell
./kafka-consumer-groups.sh --bootstrap-server localhost:9092, localhost:9093 --list
--------------------------------
console-consumer-98720
console-consumer-27709
```

## 查看指定消费者组的消费情况

```shell
./kafka-consumer-groups.sh \
--describe \
--bootstrap-server 172.28.201.4:9092 \
--group console-consumer-27709
-------------------------------------
TOPIC PARTITION CURRENT-OFFSET LOG-END-OFFSET LAG    CONSUMER-ID                                      HOST      CLIENT-ID
snippet  0        1            1              0  consumer-1-a875811d-aece-4200-8948-a9d8164a90be   /127.0.0.1   consumer-1
snippet  1        2            2              0  consumer-1-a875811d-aece-4200-8948-a9d8164a90be   /127.0.0.1   consumer-1
snippet  2        2            2              0  consumer-1-a875811d-aece-4200-8948-a9d8164a90be   /127.0.0.1   consumer-1
```
- `Topic`：当前消费者组关联的Topic
- `PARTITION`：当前消费者组关联的所有分区Id
- `CURRENT-OFFSET`：已消费消息数
- `LOG-END-OFFSET`：消息总数
- `LAG`：未消费消息数
- `CONSUMER-ID`：消费者ID
- `HOST``
- `CLIENT-ID`：客户端Id

---
参考：[kafka一小时入门精讲课程](https://www.bilibili.com/video/BV1h94y1Q7Xg?p=10&spm_id_from=pageDriver&vd_source=ce67cf212f4a949cf75348b5404c5e27)
