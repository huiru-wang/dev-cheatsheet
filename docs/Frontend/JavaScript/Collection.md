
## Array
详见：[MDN: JavaScript-Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

**数组不是基本类型，是Array对象**
- 可调整大小的，并且可以包含不同的数据类型
- 
```javascript
let a = [1, 2]
let b = [3, 4, 5, 6]
let c = [...a, ...b]    // [1, 2, 3, 4, 5, 6]
```

## Set
详见：[MDN: JavaScript-Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

```javascript
const set = new Set();

const languages = [
    "English",
    "Finnish",
    "English",
    "French",
]
const words = new Set(languages);    // ["English", "Finnish", "French"]

// push ❌
words.add("Chinese")    // ["English", "Finnish", "French", "Chinese"]
words.delete("Chinese") // ["English", "Finnish", "French"]
words.has("English")    // true
words.clear()           // []
```

集合运算
```javascript
let A = new Set([1, 2, 3, 4, 5])
let B = new Set([3, 4, 5, 6])

let c = a.filter((num) => B.has(num))   // 

```

## Map

```javascript
const map = new Map()

countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
]
const countriesMap = new Map(countries)  // "Finland" => "Helsinki", "Sweden" => "Stockholm"

// countriesMap["Chinese"] = "Beijing" ❌ 这是取对象属性的方式
countriesMap.set("Chinese", "Beijing")

countriesMap.get("Chinese")              // "Beijing"
countriesMap.has("Chinese")              // true

// key iterator
for (const country of countriesMap) {
    countriesMap.get(country) 
}
```



## 深拷贝
```javascript
// 数组
let box = list.slice();
let box = [].concat(list); 
let box = [...list];
let box = Array.from(list);

// 对象


```
