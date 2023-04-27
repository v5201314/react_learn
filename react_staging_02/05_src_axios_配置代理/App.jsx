import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  //获取学生信息
  getStudentInfo = ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('请求成功',response.data);},
      error => {console.log('请求失败',error);}
    )
  }

  //获取汽车信息
  getCarInfo = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('请求成功',response.data);},
      error => {console.log('请求失败',error);}
    )
  }
  render() {
   
    return (
      <div>
        <button onClick={this.getStudentInfo}>点击获取数据</button>
        <button onClick={this.getCarInfo}>点击获取数据</button>
      </div>
    )
  }
}
