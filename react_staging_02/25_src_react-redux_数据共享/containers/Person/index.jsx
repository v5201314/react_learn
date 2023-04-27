import React, { Component } from 'react'
import { nanoid } from 'nanoid'

//引入 connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { creAddPresonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name:name,age:age}
        console.log(personObj);

        this.props.tianjai(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        const {yiduiRen} = this.props 
        return (
            <div>
                <h1>我是Person组件,上方组件求和为：{this.props.count}</h1>
               <input ref={(c)=>this.nameNode = c} type="text" placeholder='输入名字' />
               <input ref={(c)=>this.ageNode = c} type="text" placeholder='输入年龄' />
               <button onClick={this.addPerson}>添加</button>
               <ul>
               {
                    yiduiRen.map((personObj)=>{
                        return <li key={personObj.id}>{personObj.name}-----{personObj.age}</li>
                    })
               }
               </ul>
            </div>
        )
    }
}

export default connect(
    (state) =>{
        return {
            yiduiRen:state.rens,
            count:state.he
        }
    },
    {
        tianjai:creAddPresonAction
    }
)(Person)