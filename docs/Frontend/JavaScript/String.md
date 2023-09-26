## 模板字符串

```javascript
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)
```

## 字符串索引

```javascript
let string = 'JavaScript'
let firstLetter = string[0] // J
```

```javascript
let string = 'Java Script'
string.indexOf('Java')      // 0
string.indexOf('a')         // 1
string.lastIndexOf('a')     // 3

string.charAt(0)            // J
```

## 切分字符串

```javascript
let string = 'JavaScript'
let java = string.substring(0,4) // Java
let script = string.substring(4) // Script
```

```javascript
let countries = 'Finland,Sweden,Norway,Denmark,and Iceland'

countries.split(',')  // ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
countries.split('') // ["Finland,Sweden,Norway,Denmark,and Iceland"]
```

## 是否存在子串

```javascript
let string = 'Love is the best to in this world'

string.startsWith('Love')   // true
string.endsWith('world')    // true
string.includes('best')     // true

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

## String转数字

通用方法

- Number()

- Plus sign(+)

```javascript
let num = '10'
let numInt = Number(num)    // 10
let numInt = +num           // 10   
```

特定精度

```javascript
let num = '10'
let numInt = parseInt(num)  // 10

let num = '9.81'
let numFloat = parseFloat(num)  // 9.81
```

## 正则