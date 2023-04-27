import React, { Component } from 'react'
import store from '../../redux/store'

import {creDecAction,creIncAction} from '../../redux/count_action'

export default class Count extends Component {

  //加法
  increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch(creIncAction(value*1))
  }
  //减法
  decrement = ()=>{
    const {value} = this.selectNumber
    store.dispatch(creDecAction(value*1))
  }
  //奇数再加
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    const cont = store.getState();
    if(cont % 2 !== 0)
    store.dispatch(creIncAction(value*1))
  }
  //异步加
  incrementAsync = ()=>{
    const {value} = this.selectNumber
    setTimeout(()=>{
      store.dispatch(creIncAction(value*1))
    },500)
    
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        {/* 选择一次加减多少 */}
        <select ref={c=>this.selectNumber=c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {/* 点击加对应的数 */}
        <button onClick={this.increment}>+</button>
         {/* 点击减对应的数 */}
        <button onClick={this.decrement}>-</button>
        {/* 点击后 求和为奇数  才加对应的数 */}
        <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>
        {/* 等待一会再加 */}
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
