
import { createStore,applyMiddleware} from 'redux'
//导入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'

//npm i redux-devtools-extensio 
//redux 的开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

//引入汇总好的 reducers
import reducers from './reducers'



//如果不用redux开发者工具的的话
//export default createStore(allReducer,applyMiddleware(thunk))

//用redux开发者工具的的话
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))