import React, { Component } from 'react'
//进行消息订阅的库
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = ()=>{
       //获取用户的输入(连续解构赋值+重命名)
       const {KeyWordElement:{value:KeyWord}} = this
       //发送请求前通知List更新状态
       PubSub.publish('gystt',{isFirst:false,isLoading:true})
       //发送网络请求
       axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(
           response => {
                //请求成功后通知List更新状态
               PubSub.publish('gystt',{isLoading:false,users:response.data.items})
           },
           error => {
               //请求失败后通知List更新状态
               PubSub.publish('gystt',{isLoading:false,err:error.message})
           },
           
       )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={ (c)=>this.KeyWordElement = c } type="text" placeholder="输入关键字以搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
