# ArrayFunction


## foreach
**遍历数组，修改元素会修改原数组，无返回值**
```javascript
array.foreach((item, index, array) => {
    // item：当前元素
    // index：当前索引
    // array：全量数组
});
```

## map
**通过返回新的数组，不修改原数组，在遍历过程中修改item，仍然修改原数组**
```javascript
array.map((item, index, array) => {
    // item：当前元素
    // index：当前索引
    // array：全量数组
});
array.map((item, index) => {
    
});
array.map(item => item + 1);
```

## filter
遍历所有元素，返回为true的元素；
```javascript
const ans2 = array.filter((item, index, array) => {
    // item：元素
    // index：索引
    // array：全量数组
    return item.key.includes("c");
});

const array = [
    { "key": "chat", "password": "xx" },
    { "key": "google", "password": "x" },
    { "key": "micro", "password": "xxx" }
];
// 简写
const ans1 = m.filter(item => item.key.includes("c"));
```

## reduce

```javascript
array.reduce((previousValue, currentValue, currentIndex, array) => {
    // previousValue：上一个值，初始为初始值，这里设为10
    // currentValue：当前值
    // currentIndex：当前索引
    // array：原数组
}, initialValue);


const array = [1, 2, 3, 4, 5];
const sum = array.reduce((pre, interval, index, arr) => {
    return pre + interval;  // 0 + 1 + 2 + 3 + 4 + 5
}, 0);
```
## sort
```javascript
const array = [9, 2, 8, 4, 5];
array.sort((a, b) => a - b);    // [ 2, 4, 5, 8, 9 ]

array.sort((a, b) => b - a);    // [ 9, 8, 5, 4, 2 ]
```

## find / findIndex
```javascript
const ages = [34, 22, 25, 32, 35, 18]

const age = ages.find((age) => age < 30)    // 22 返回找到的第一个元素

const age = ages.findIndex((age) => age < 30)   // 1 返回找到的第一个元素的索引
```


## every / some

```javascript
const ages = [34, 22, 25, 32, 35, 18]

const age = ages.every((age) => age < 30)    // 不全是 false

const age = ages.some((age) => age < 30)   // 存在 true
```



