import {INCREMENT,DECREMENT} from '../constant'

//同步 action
export function creIncAction(data){
    return {type:INCREMENT,data}
}

export function creDecAction(data){
    return {type:DECREMENT,data}
}

// redux-thunk
//异步action，就是action的值是一个函数 
export function creIncAsyncAction(data,time){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(creIncAction(data))
        },time)
    }
}