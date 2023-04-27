import React, { Component } from 'react'

//模拟数据
const DetailData = [
    {id:'01',content:'我是消息1的详情内容'},
    {id:'02',content:'我是消息2的详情内容'},
    {id:'03',content:'我是消息3的详情内容'},
]

export default class Detail extends Component {
  render() {
    //接收 params参数 在 this.props.match.params 中
    // const {id,title} = this.props.match.params
   

    // //接收 search参数  在 this.props.location 中
    // const { search } = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    //接收 state参数  在 this.props.location.state 中
    const { id,title } = this.props.location.state || {}
   

     const findResult = DetailData.find((detailObj)=>{
            return detailObj.id===id
    }) || {}


    return (
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{findResult.content}</li>
        </ul>
    )
  }
}
