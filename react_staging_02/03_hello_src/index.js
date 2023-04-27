//引入 react核心库
import React from 'react'
//引入 ReactDom
import ReactDOM from 'react-dom/client'
//引入 APP 组件
import App from './App.js'

//渲染APP到页面上
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(
    <App/>
)