# curl




## 请求耗时
创建curl输出模板文件：`format.txt`
```txt
   time_namelookup:  %{time_namelookup}\n
      time_connect:  %{time_connect}\n
   time_appconnect:  %{time_appconnect}\n
     time_redirect:  %{time_redirect}\n
  time_pretransfer:  %{time_pretransfer}\n
time_starttransfer:  %{time_starttransfer}\n
---------------------------\n
        time_total:  %{time_total}\n
```
增加执行参数：
```shell
curl -X POST -d "{}" http://xxx -w "@format.txt" -o /dev/null -s
```
- `-w "@format.txt"`：指定输出模板
- `-o /dev/null`：不输出响应；
- `-s`：不打印进度条；
