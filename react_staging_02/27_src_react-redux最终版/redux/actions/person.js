import { ADD_PERSON } from '../constant'

export const creAddPresonAction = (personObj)=>{
    return {type:ADD_PERSON,data:personObj}
}