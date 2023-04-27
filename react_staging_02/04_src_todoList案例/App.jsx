import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {

  //初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '打游戏', done: true },
      { id: '003', name: '敲代码', done: false },
    ]
  }

  //添加数据的方法
  addTodo = (todoObj) => {
    //获取原状态
    const { todos } = this.state;
    //添加新数据
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({ todos: newTodos })

  }

  //更新数据的方法
  updateTodo = (id, done) => {
    //获取原状态
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    //更新状态
    this.setState({ todos: newTodos })
  }

  //删除数据的方法
  deleteTodo = (id) => {
    //获取原状态
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    //更新状态
    this.setState({ todos: newTodos })
  }


  //全选所有任务
  CheckedAllTodo = (done)=>{
    //获取原状态
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    //更新状态
    this.setState({ todos: newTodos })
  }

  //删除所有已完成任务
  deleteAllTodo = () => {
    //获取原状态
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done !== true 
    })
    //更新状态
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} CheckedAllTodo={this.CheckedAllTodo} deleteAllTodo={this.deleteAllTodo}/>
        </div>
      </div>
    )
  }
}
