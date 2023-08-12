
# JVM定位常用方法

## CPU占用高定位

### 1. 获取Java进程Id
```shell
top
jps
ps -ef | grep java
```

### 2. 找到CPU占用高线程
```shell
top -Hp [java-pid]
ps H -eo pid, tid, %cpu | grep [java-pid]
```

### 3. 获取指定线程堆栈

```shell
jstack [tid]

```

## 查看堆区活跃大对象

```shell
jmap -histo:live [PID] | head -n 9

 num     #instances         #bytes  class name (module)
-------------------------------------------------------
   1:         73320        9959344  [B (java.base@17.0.7)
   2:        262144        6291456  org.apache.logging.log4j.core.async.AsyncLoggerConfigDisruptor$Log4jEventWrapper
   3:          6053        1941968  [I (java.base@17.0.7)
   4:         20427        1797576  java.lang.reflect.Method (java.base@17.0.7)
   5:         11869        1697688  [Ljava.lang.Object; (java.base@17.0.7)
   6:         69745        1673880  java.lang.String (java.base@17.0.7)
   7:         47961        1534752  java.util.concurrent.ConcurrentHashMap$Node (java.base@17.0.7)
   8:         11475        1359392  java.lang.Class (java.base@17.0.7)
   9:          7078         587760  [Ljava.util.HashMap$Node; (java.base@17.0.7)
```

## 通过dump分析内存

### 生成dump文件

```shell
jmap -dump:format=b,file=[filename] [PID]
jmap -dump:live,format=b,file=[filename] [PID]

-------------------------------------------------------
Dumping heap to /data/live.hprof ...
Heap dump file created [62829011 bytes in 0.268 secs]
```
- `live`：只dump存活对象；
- `filename`：dump文件名，一般为：`xxx.hprof`
- `PID`：Java进程Id；

### 分析堆内存

有多种dump分析工具：jvisualvm、eclipse memory analyzer等；


## 动态修改JVM参数
```shell
jinfo -flag +PrintGCDetails [PID]
```

