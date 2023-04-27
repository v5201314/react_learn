import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import MyNavLink from './components/MyNavLink'
import About from './pages/About'// Home 是路由组件
import Home from './pages/Home' // About 是路由组件
import Header from './components/Header' //Header 是一般组件
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 使用路由链接实现切换组件 */}
              {/* NavLink :当被点击时添加一个类名 active */}
              {/* 
              
                  MyNavLink 二次封装的NavLink 
                    1.标签体内容是一个特殊的标签属性
                    2.可以通过 this.props.children
              
              */}
              <MyNavLink to="/about" >About</MyNavLink>
              <MyNavLink to="/home" >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 
                
                  通常情况下 path 和 component 是一一对应的关系
                  用 Switch标签 包裹路由 和路由链接匹配上后 不在向后匹配 
                
                */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
