import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'


export default class App extends Component {
  //初始化状态
  state = {
    users:[], //请求回来的数据
    isFirst:true, //是否第一次打开页面
    isLoading:false, //数据是否加载完成
    err:'', //存储请求相关的错误信息
  }

  //更新App的state的方法
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {

    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
