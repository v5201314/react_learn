import React from 'react'

import ReactDOM from 'react-dom/client'

import store from './redux/store'
import { Provider } from 'react-redux'

import App from './App'

const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(
     <Provider store={store}>
          <App />
     </Provider>
)