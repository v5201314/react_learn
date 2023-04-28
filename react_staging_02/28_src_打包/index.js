import React from 'react'

import ReactDOM from 'react-dom/client'

import store from './redux/store'

import { Provider } from 'react-redux'

import App from './App'

const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(
     //用 Provider 包裹 App,将 store 传递给 Provider。供App中所有组件使用其中的状态
     <Provider store={store}>
          <App />
     </Provider>
)