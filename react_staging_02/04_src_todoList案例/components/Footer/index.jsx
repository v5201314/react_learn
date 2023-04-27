import React, { Component } from 'react'

import './index.css'
export default class Footer extends Component {

  //全选checkbox的回调
  handleCheckedAll = (event)=>{
    this.props.CheckedAllTodo(event.target.checked)
  }

  //删除所有已完成任务
  deleteAllChecked = ()=>{
    if(window.confirm("确定删除已完成任务")){
      this.props.deleteAllTodo()
    }
   
  }

  render() {
    const {todos} = this.props
    //已完成的个数
    const doneCout = todos.reduce((pre,todo)=>{
      return pre + (todo.done ? 1:0)
    },0)

    //总任务数
    const total = todos.length
    return (
      <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCout === total && total !==0 ? true : false}/>
            </label>
            <span>
              <span>已完成{doneCout}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.deleteAllChecked}>清除已完成任务</button>
          </div>
    )
  }
}
