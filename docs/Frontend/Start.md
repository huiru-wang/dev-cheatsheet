

## Vite脚手架

```shell
npm create vite
yarn create vite
```

## 集成tailwindcss
### 1. 添加依赖
```shell
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### 2. 初始化并生成配置文件
```shell
npx tailwindcss init -p
```

#### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. 引入@tailwind
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```