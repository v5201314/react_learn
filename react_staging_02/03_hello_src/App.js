//创建 “外壳” 组件 App
import React,{Component} from "react"
//导入其他组件
import Hello from "./components/Hello/Hello"

export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}