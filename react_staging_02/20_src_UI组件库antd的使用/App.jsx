import React, { Component } from 'react'
//配置标签的语言
// import zhCN from 'antd/es/locale/zh_CN';
// 标签样式库
import { Button} from 'antd';
// // ioc图标库
// import {
//   WechatOutlined
// } from '@ant-design/icons';
export default class App extends Component {
  render() {
    return (
      <div>
       
        <button>原生的按钮</button>
        <Button type="primary">组件库的按钮</Button>
       
      </div>
    )
  }
}
