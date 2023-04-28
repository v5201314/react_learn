/**
 *  用于汇总所有 reducer 
 **/

// combineReducers 如果要 redux 管理多个状态，请引入它
import {combineReducers} from 'redux'

//引入要汇总的组件
import countReducer from './count'
import personReducer from './person'

//汇总所有的 reducer 变为一个总的 reducer
export default combineReducers({
    he:countReducer,
    rens:personReducer
})
