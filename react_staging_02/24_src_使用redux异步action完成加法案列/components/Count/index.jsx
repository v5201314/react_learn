import React, { Component } from 'react'
import store from '../../redux/store'

import {
  creDecAction,
  creIncAction,
  creIncAsyncAction} from '../../redux/count_action'

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
      store.dispatch(creIncAsyncAction(value*1,500))  
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref={c=>this.selectNumber=c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
