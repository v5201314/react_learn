import React, { Component } from 'react'
// withRouter 给一般组件加上路由组件特有的方法
import {withRouter} from 'react-router-dom'

class Header extends Component {

  back = ()=>{
    this.props.history.goBack()
  }

  render() {
    return (
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>回退</button>
          </div>
    )
  }
}


export default withRouter(Header)
