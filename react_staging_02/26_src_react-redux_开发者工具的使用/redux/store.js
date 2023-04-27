// combineReducers 如果要 redux 管理多个状态，请引入它
import { createStore,applyMiddleware,combineReducers } from 'redux'
//导入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'

//npm i redux-devtools-extensio 
//redux 的开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

//汇总所有的 reducer 变为一个总的 reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})

//如果不用redux开发者工具的的话
//export default createStore(allReducer,applyMiddleware(thunk))

//用redux开发者工具的的话
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))