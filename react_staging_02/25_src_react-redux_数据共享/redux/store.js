// combineReducers 如果要 redux 管理多个状态，请引入它
import { createStore,applyMiddleware,combineReducers } from 'redux'
//导入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

//汇总所有的 reducer 变为一个总的 reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})

export default createStore(allReducer,applyMiddleware(thunk))