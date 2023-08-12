
# Docker常用命令
- image
- container
- repository

## 镜像命令

#### 查询镜像

如果需要tag，只能去官网查：[https://hub.docker.com/](https://hub.docker.com/)
```shell
docker search [REPOSITORY]
```

#### 拉取镜像
```shell
docker pull [repository]:[tag]
```

#### 查看镜像
```shell
docker images ls
```

build：从Dockerfile创建

push

#### 删除镜像
```shell
docker rmi [image_id]
```

## 容器命令

#### 启动容器
启动已存在容器
```shell
docker start [container_id]
```

#### 创建并启动
run = create + start 创建并启动
```shell
docker run  ` 
-d ` 后台运行
--restart=always ` docker启动时自动重启容器
--name kibana ` 指定容器名
--net com.whr ` 指定网络
--ip 172.18.0.2 ` 在com.whr网络中指定IP
-e ES_JAVA_OPTS="-Xms64m -Xmx128m" ` 配置环境变量
--link elasticsearch:elasticsearch ` 关联容器（必须在同一网络）
-p 5601:5601 `  端口映射宿主机
-v /elk/kibana.yml:/usr/share/kibana/config/kibana.yml ` 挂载目录：文件、目录
-v /d/elk/kibana.yml:/usr/share/kibana/config/kibana.yml ` windows挂载目录
kibana:7.8.0 ` 使用的镜像
```

#### 进入容器
```shell
docker exec -it [container_id] bash
```

#### 重启容器
```shell
docker restart [container_id]
```

#### 停止容器
```shell
docker stop [container_id/name] # 优雅停止
docker kill [container_id/name] # 强制停止
```

#### 删除容器
需要先停止容器
```shell
docker rm [container_id/name]
```

## network

配置网络，分配容器IP

- bridge：可以自定义网段，固定容器ip；不指定则重启后重新分配ip给容器；可创建网桥，为容器指定ip；
- none
- host：使用主机端口，占用主机端口

#### 查看所有network

```shell
docker network ls
----------------------------------------
NETWORK ID     NAME      DRIVER    SCOPE
5c48fb70b629   elk-net   bridge    local
```

#### 创建桥接网络
```shell
docker  network  create  [网络名称]
docker network create com.whr
```

#### 创建容器并指定网络

添加 --net 参数
```shell
docker run -d `
--name elasticsearch `
--net com.whr `
...
```
