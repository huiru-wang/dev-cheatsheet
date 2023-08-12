
# Dockerfile
DockerFile：定制化的镜像描述文件

## 常用Dockerfile指令：
- `FROM`：指定基础镜像，例如FROM ubuntu:latest。

- `RUN`：在镜像中执行命令，例如RUN apt-get update && apt-get install -y curl。

- `COPY`：将文件或目录从主机复制到镜像中，例如COPY app.py /app/。

- `ADD`：类似于COPY指令，但还可以从URL或归档文件中添加文件，例如ADD http://example.com/big.tar.gz /opt/。

- `WORKDIR`：设置工作目录，例如WORKDIR /app/。

- `EXPOSE`：声明容器将使用哪些端口，例如EXPOSE 80。

- `CMD`：指定默认的容器启动命令和参数，例如CMD ["python", "app.py"]。

- `ENTRYPOINT`：指定容器启动时要运行的命令，例如ENTRYPOINT ["python", "app.py"]。

- `ENV`：设置环境变量，例如ENV MY_VAR="my_value"。

- `ARG`：定义构建时传递给镜像的参数，例如ARG VERSION。

## 发布个人服务到容器
### 1、创建Dockerfile
```dockerfile
FROM golang:1.18.3

# 定义变量：$WORKDIR, 项目路径
ENV WORKDIR /root/go-gin

# 类似于COPY指令，但还可以从URL或归档文件中添加文件，例如ADD http://example.com/big.tar.gz /opt/。
ADD main $WORKDIR/main
ADD config/application.yml $WORKDIR/config/application.yml

# 执行权限命令
RUN chmod +x $WORKDIR/main

# 设置工作目录，例如WORKDIR /app/。
WORKDIR $WORKDIR

# 容器启动时 在工作目录下执行命令
ENTRYPOINT ["./main"]
```
### 2、制作镜像
```dockerfile
docker build -t whr/mess:v1 --rm=true .
```

- --rm：创建完成，删除中间镜像

### 3、启动容器服务
```bash
docker run -d `
--name mess `
-e port=8080 `
-v /d/data/mess/gin_http0.log:/root/logs/gin_http.log `
-v /d/data/mess/application.yml:/root/config/application.yml `
--network com.whr --network-alias mess0 `
-p 8081:8080 `
whr/mess:v1
```
```bash
docker run -d `
--name mess0 `
-e port=8080 `
-v /d/data/mess/gin_http0.log:/root/logs/gin_http.log `
-p 8081:8080 `
whr/mess
```
