import React, { Component } from 'react'
import { NavLink,Route} from 'react-router-dom'

import About from './pages/About'// Home 是路由组件
import Home from './pages/Home' // About 是路由组件
import Header from './components/Header' //Header 是一般组件
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 使用路由链接实现切换组件 */}
              {/* Navlink :当被点击时添加一个类名 active */}
                <NavLink className="list-group-item " to='/about'>About</NavLink>
                <NavLink className="list-group-item " to='/home'>Home</NavLink>
  
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
