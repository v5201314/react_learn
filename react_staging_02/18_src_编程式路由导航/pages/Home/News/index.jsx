import React, { Component } from 'react'

export default class News extends Component {
  //进入 News组件 两秒后跳转到 /home/message 
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.props.history.push('/home/message')
  //   },2000)
  // }
  render() {
    return (
        <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
