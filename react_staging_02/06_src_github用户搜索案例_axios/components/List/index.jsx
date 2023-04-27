import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                {
                    //jsx语法不能使用 if 但是可以使用 三元表达式
                    isFirst ? <h2>欢迎使用github用户搜索器</h2> :
                    isLoading ? <h2>正在加载中。。。</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
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
