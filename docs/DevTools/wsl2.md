# root用户
```shell
sudo passwd root
su root
```
以root用户启动wsl命令行：`C:\Windows\system32\wsl.exe -d Ubuntu-20.04 -u root`

# 清华源
```shell
cp /etc/apt/sources.list /etc/apt/sources.list.bak
vim /etc/apt/sources.listvim
--------------------------------------------------------------------
# 清华源使用帮助：https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
--------------------------------------------------------------------

apt update
```

# Docker
手动安装Docker Engine：https://docs.docker.com/engine/install/ubuntu/

自启动：`systemctl enable docker`

https://cn.vuejs.org/tutorial/#step-2