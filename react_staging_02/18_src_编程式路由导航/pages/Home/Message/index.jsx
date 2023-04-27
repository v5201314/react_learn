import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }

  replaceShow = (id,title)=>{
    //实现编程式路由导航 + params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //实现编程式路由导航 + search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}$title=${title}`)

    //实现编程式路由导航 + params参数
    // this.props.history.replace(`/home/message/detail`,{id:id,title:title})
  }

  pushShow =  (id,title)=>{
    //实现编程式路由导航
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递 Params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  {/* 使用按钮实现不同方式的跳转 */}
                  &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>path查看</button>
                  &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>

                  {/* 向路由组件传递 search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递 state参数 地址栏不会显示传递的消息 */}
                  {/* <Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                  {/* replace 开启后，浏览器不会留下回退记录，而是直接替换当前这一条记录 */}
                </li>
              )
            })
          }

        </ul>
        <hr />
        {/*  Params参数 的声明接收 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>


        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    )
  }
}
