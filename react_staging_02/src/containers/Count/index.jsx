import React, { Component } from 'react'

import { creDecAction, creIncAction } from '../../redux/actions/count'

//引入 connect用于连接UI组件与redux
import {connect} from 'react-redux'

 class Count extends Component {

    //加法
    increment = ()=>{
      const {value} = this.selectNumber
      this.props.jia(value*1);
    
    }
    //减法
    decrement = ()=>{
      const {value} = this.selectNumber
      this.props.jian(value*1);
     
    }
    //奇数再加
    incrementIfOdd = ()=>{
      const {value} = this.selectNumber
      this.props.jia(value*1);
     
    }
    //异步加
    incrementAsync = ()=>{
      const {value} = this.selectNumber
      this.props.jia(value*1);
    }
    render() {
      const { count } = this.props
      return (
        <div>
          <h1>我是 Count组件 ,下方组件总人数为：{this.props.renSu} </h1>
          <h3>当前求和为: {count}</h3>
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

// a函数 的返回值为一个对象 作为状态传递给 UI组件
// function mapStateToPreps(state){
//     return {count:state}
// }

// // a函数 的返回值作为一个对象 里面有各种方法 操作状态的方法 传递给 UI组件
// function mapDispatchToProps(dispatch){
//     return {
//         jia:(number)=>{
//             dispatch(creIncAction(number))
//         },
//         jian:(number)=>{
//             dispatch(creDecAction(number))
//         }
//     }
// }

// //创建并暴露一个 Count的容器组件
// export default  connect(mapStateToPreps,mapDispatchToProps)(CountUI)

//简写方法
export default  connect(
    state => ({
      count:state.he,
      renSu:state.rens.length
    }),
    {
        jia:creIncAction,
        jian:creDecAction
    }
    )(Count)