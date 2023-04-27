import React, { Component } from 'react'
//对props进行限制的库
import PropTypes from 'prop-types'
//生成全球唯一的随机字符串
import {nanoid} from 'nanoid'

import './index.css'

export default class Header extends Component {

  //对接受的props进行类型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //按下回车确认
  handleKeyUp = (event)=>{
    //解构赋值
    const {target} = event
    //判断是否按下回车
    if(event.keyCode !== 13) return
    if(target.value.trim() === ''){
      alert('输入不能为空') 
      return
    }
    //创建一个todo对象
    const todoObj={id:nanoid(),name:target.value,done:false}
    //调用父组件传递过来的添加方法
    this.props.addTodo(todoObj)

    //清空输入框
    target.value=''
  }

  render() {
    return (
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
