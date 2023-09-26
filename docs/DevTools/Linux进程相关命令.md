# 进程相关

## PS
```shell
USER        PID      %CPU    %MEM       VSZ       STAT     TIME         COMMAND
进程所有者  进程ID  占用CPU  占用内存   虚拟内存KB  进程状态  占用CPU总时间    命令
```

### 查进程
```shell
ps -ef
ps -aux
```

### 查看进程command
增加 `w` 显示更多 `command`
```shell
ps -auxw | grep [keword]
ps -auxww | grep [keword]
```

## TOP

### 系统级信息
```shell
top - 02:11:33 up 33 min,  0 users,  load average: 0.00, 0.00, 0.00
Tasks:   9 total,   1 running,   8 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.3 us,  0.5 sy,  0.0 ni,100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   7903.7 total,   7555.3 free,    187.0 used,    161.4 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   7506.9 avail Mem
```
- 系统运行时长，当前登录用户数，系统负载：[1min, 5min, 15min]
- Tasks：各状态的进程数；
- %Cpu：`us[用户空间占用CPU比值]`，`sy[内核空间占用CPU比值]`，`id[CPU空闲百分比]`
- MiB Mem：物理内存；
- MiB Swap：交换区；`used多说明内存不够需要硬盘来凑`；

### 进程级级信息
```shell
 PID        USER        S         %CPU          %MEM      COMMAND
[进程Id]   [用户]   [进程状态]   [CPU占用]     [内存占用]   [命令]

PR           VIRT       RES          SHR   
[优先级]   [虚拟内存]  [物理内存]   [共享内存大小]
```

### 查询指定进程下的线程
```shell
top -Hp [PID]
----------------------------------------------------------------------------
PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
144 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.05 java
489 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.79 java
490 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.00 GC Thread#0
491 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.00 G1 Main Marker
492 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.00 G1 Conc#0
493 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.00 G1 Refine#0
494 root      20   0 3932608 106164  27508 S   0.0   1.3   0:00.41 G1 Service
```

### 交互命令

- `M`：按内存排序；
- `P`：按CPU排序；
- `e`：切换单个进程内存单位；
- `E`：切换系统整体内存单位；
- `H`：同时显示线程(默认只显示进程)；
- `c`：显示完整命令行；
- `u`：显示输入的用户下的进程；
- `1`：显示所有CPU核心数的CPU占用情况；
