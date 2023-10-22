
![Untitled](/images/postman.png)

## Test script

### 获取Response值

```javascript
var res = JSON.parse(responseBody);
var id = res.id;
```

### 添加到环境变量

```javascript
var res = JSON.parse(responseBody);
var token = res.token;
pm.environment.set("Token", token);
```

