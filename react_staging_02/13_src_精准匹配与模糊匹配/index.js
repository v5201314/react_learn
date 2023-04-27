import React from 'react'

import ReactDOM from 'react-dom/client'

import { BrowserRouter} from 'react-router-dom'

import App from './App'

const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
)
