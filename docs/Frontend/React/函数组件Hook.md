# 函数Hook

函数组件的每一次渲染、更新，都是**以函数组件为单位**重新执行，产生全新的私有上下文，内部的代码都重新执行；完成组件重新渲染；

## useState
1、`setState`整体覆盖`state`，遵从函数式编程，每次set使用新的对象；

2、`setState`是异步函数，新state会放入更新队列，再执行flush来更新组件；

3、不要直接修改原state，而是通过原state，生成新的state，再执行`setState`

```typescript
import { useState } from "react";

export const OptionButtons = () => {

    const [x, setX] = useState(0);

    const [arr, setArr] = useState([0, 1]);

    const handleClick1 = () => {
        setX(x + 1);
        console.log(x)   // setState是异步，这里不可直接获取最新state
    }

    const handleClick2 = () => {
        flushSync(() => {
            setShowMode(!showMode)  // 使用flushSync，立即同步更新state
        })
        console.log(x)
    }

    const handleClick3 = () => {
        for (let i = 0; i < 10; i++) {
            setX(x + 1);
        }
        // 最终x仍为：1，因为每次set的时候的x都是0；
    }

    const handleClick4 = () => {
        // arr.push(3);                     // 不要修改原state
        setArr(preArr => [...preArr, 3]);   // 而是生成新的数组
    }

    return (
        <>
            <span onClick={handleClick1}>{x}</span>
            <span onClick={handleClick2}>{x}</span>
            <span onClick={handleClick3}>{x}</span>
            <span onClick={handleClick4}>{arr}</span>
        </>
    );
}
```


## useEffect
1、`useEffect`在组件第一次渲染时，执行一次；

2、指定监听Model时，在Mode更新时，`useEffect`执行一次；

```typescript
import { useState,useEffect } from "react";

export const OptionButtons = () => {

    const [x, setX] = useState(0);

    const [y, setY] = useState(0); 

    const handleClick = () => {
        setX(x + 1);
        console.log(x)   // setState是异步，这里不可直接获取最新state
    }

    // 第一次渲染执行
    useEffect(() => {
        console.log("First Render")
    }, [])

    // 监听的任意对象更新，则执行，包括第一次渲染的x，y初始化；
    useEffect(() => {
        console.log("State Changed:", x, y)
    }, [x, y])

    return (
        <>
            <span onClick={handleClick}>{x}</span>
        </>
    );
}
```

## useRef
1、`useRef`绑定的是React Dom对象

```typescript
import { useRef } from "react";

export const CodeCards: React.FC<{}> = () => {

    const keyInput = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') {
            valueInput.current?.focus();
        }
    }

    return (
        <>
            <input
                type="text"
                ref={keyInput}
                onKeyDown={(e) => handleKeyDown(e)}
            />
        </>
    )
}

```

## useContext
1、声明Context
```typescript
import { createContext, useEffect, useState, ReactNode } from 'react';

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalContext = createContext<{
    addMode: boolean
    setAddMode: (value: boolean) => void,
}>(null);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {

    const [addMode, setAddMode] = useState(false);

    const context = { addMode, setAddMode}

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    );
};
```
2、使用Context

```typescript
import { GlobalContext } from '../Context';
import { useContext } from "react";

export const OptionComponent = () => {
    
    // 从全局上下文中获取
    const { addMode, setAddMode } = useContext(GlobalContext);

    return (
        <>
        </>
    );
}
```

