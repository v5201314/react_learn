import {INCREMENT,DECREMENT} from './constant'
export function creIncAction(data){
    return {type:INCREMENT,data}
}

export function creDecAction(data){
    return {type:DECREMENT,data}
}