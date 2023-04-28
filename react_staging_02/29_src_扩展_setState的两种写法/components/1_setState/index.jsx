import React, { Component } from 'react'

export default class Demo extends Component {

  state = { count: 0 }

  add = () => {
  //   //对象式得 setState
  //   //1.获取原来的值
  //   const count = this.state.count
  //   //2.更新状态
  //  // this.setState({ count: count + 1 }) //异步执行

  //  /**
  //   * 当我们需要状态刚一更新且页面也刷新了后，做某些事情，就可以给 setState() 传入第二个参数，一个函数
  //   * 状态刚一更新且页面也刷新了后就会调用该函数
  //   */
  //  this.setState({ count: count + 1 },()=>{
  //   console.log('查看更改完的状态',this.state.count);
  //  })

  //函数式的 setState
    this.setState((state,props)=>{
      return {count:state.count+1}
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}
