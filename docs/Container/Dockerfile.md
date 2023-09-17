
# Dockerfile
DockerFile：定制化的镜像描述文件
- 定制化；
- 精简镜像大小；

## Dockerfile指令
- `FROM`：指定基础镜像 `FROM ubuntu:latest`

- `RUN`：在镜像中执行命令 `RUN apt-get update && apt-get install -y curl`

- `COPY`：将文件或目录从主机复制到镜像中，`COPY app.py /app/`

- `ADD`：类似于COPY指令，但还可以从URL或归档文件中添加文件 
  
  `ADD http://example.com/big.tar.gz /opt/`

- `WORKDIR`：设置工作目录 `WORKDIR /app/`

- `EXPOSE`：声明容器将使用哪些端口 `EXPOSE 80`

- `CMD`：指定默认的容器启动命令和参数 `CMD ["python", "app.py"]`

- `ENTRYPOINT`：指定容器启动时要运行的命令 `ENTRYPOINT ["python", "app.py"]`

- `ENV`：设置环境变量 `ENV MY_KEY="my_value"`

- `ARG`：定义构建时传递给镜像的参数 `ARG version`

  Dockerfile文件中的某些参数需要在构建镜像时通过命令行动态调整，可以使用`ARG`将Dockerfile中的某些值设置为参数；

  在命令行中，使用：`--build-arg version=1.19`来传入动态参数；

- `USER`：指定容器内命令(`RUN xxx`)执行的用户；需要保证权限(可以使用RUN命令创建用户、赋予权限等)；

- `MAINTAINER`：作者、维护者信息：huiru<xxxx@xxx.com>（可选、可设置多个）

-- `LABEL`：镜像的标签描述信息；（可选）

  `LABEL description="Hello"`、`LABEL version="0.0.1"`

## 创建Dockerfile
```dockerfile
# 构建时动态参数
ARG version=1.18.3

FROM golang:$version

# 定义变量：$WORKDIR, 项目路径
ENV WORKDIR /root/go-gin

# 类似于COPY指令，但还可以从URL或归档文件中添加文件，例如ADD http://example.com/big.tar.gz /opt/。
ADD main $WORKDIR/main
ADD config/application.yml $WORKDIR/config/application.yml

# 执行权限命令
RUN chmod +x $WORKDIR/main

# 设置工作目录，例如WORKDIR /app/。
WORKDIR $WORKDIR

# 暴露端口
EXPOSE 80

# 容器启动时 在工作目录下执行命令
ENTRYPOINT ["./main"]
```

## 构建镜像

### 1. 从Dockerfile构建镜像
```shell
# 从path目录的Dockerfile或URL的Dockerfile创建镜像
docker build [OPTIONS] [PATH / URL] 

docker build -t whr/mess:v1 --rm=true .
```
- `-t [IMAGE_NAME:VERSION]`：创建并指定镜像名和版本；
- `-f /path/to/a/Dockerfile`：指定Dockerfile创建；
- --rm：创建完成，删除产生的中间镜像；

### 2. 从已有容器构建镜像

```shell
docker commit -a [author] -m [description] [contaner_name/id] [REPOSITORY[:TAG]]

docker commit -a "hr" -m "my images" 92e23f app:1.0.0
```
