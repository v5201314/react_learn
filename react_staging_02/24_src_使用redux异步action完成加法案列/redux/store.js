import { createStore,applyMiddleware } from 'redux'
//导入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'

import countReducer from './count_reducer'

export default createStore(countReducer,applyMiddleware(thunk))