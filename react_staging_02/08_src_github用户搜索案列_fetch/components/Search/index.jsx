import React, { Component } from 'react'
//进行消息订阅的库
import PubSub from 'pubsub-js'
//import axios from 'axios'

export default class Search extends Component {

    search = async ()=>{
       //获取用户的输入(连续解构赋值+重命名)
       const {KeyWordElement:{value:KeyWord}} = this
       //发送请求前通知List更新状态
       PubSub.publish('gystt',{isFirst:false,isLoading:true})
       //发送网络请求------axios
    //    axios.get(`https://api.github.com/search/users?q=${KeyWord}`).then(
    //        response => {
    //             //请求成功后通知List更新状态
    //            PubSub.publish('gystt',{isLoading:false,users:response.data.items})
    //        },
    //        error => {
    //            //请求失败后通知List更新状态
    //            PubSub.publish('gystt',{isLoading:false,err:error.message})
    //        },
           
    //    )

        // 发送网络请求------fetch
        // fetch(`https://api.github.com/search/users?q=${KeyWord}`).then(
        //     response =>{
        //         console.log('联系服务器成功了');
        //         return response.json()
        //     },
        //     // error => {
        //     //     console.log('联系服务器失败了',error);
        //     //     //返回一个初始化状态的 Promise 中断 .then 链
        //     //     return new Promise(()=>{})
        //     // }
        // ).then(
        //     response =>{
        //         console.log('获取数据成功了',response.items);
        //     },
        //     // error => {console.log('获取数据失败了',error);}

        // ).catch(
        //     (error)=>{console.log(error);}
        // )

         //发送网络请求------fetch(优化)

         try {
            
        const response = await fetch(`https://api.github.com/search/users?q=${KeyWord}`)
        const data = await response.json();
        PubSub.publish('gystt',{isLoading:false,users:data.items})
         } catch (error) {
            PubSub.publish('gystt',{isLoading:false,err:error.message})
         }

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
