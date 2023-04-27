import React, { Component } from 'react'
//进行消息订阅的库
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    //初始化状态
    state = {
        users: [], //请求回来的数据
        isFirst: true, //是否第一次打开页面
        isLoading: false, //数据是否加载完成
        err: '', //存储请求相关的错误信息
    }

    componentDidMount(){
        //订阅消息
    this.token = PubSub.subscribe('gystt',(_,data)=>{
            this.setState(data)
        })
    }

    componentWillUnmount(){
        //取消订阅
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    //jsx语法不能使用 if 但是可以使用 三元表达式
                    isFirst ? <h2>欢迎使用github用户搜索器</h2> :
                        isLoading ? <h2>正在加载中。。。</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} rel="noreferrer" target='_blank'>
                                                <img src={userObj.avatar_url} alt='touxiang' style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
