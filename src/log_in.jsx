import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Logger from './Logger.jsx'


ReactDOM.createRoot(document.getElementById('home')).render(
  <React.StrictMode>

    <App />
    {/* <CategoriesWeb /> */}
    {/* <Feed /> */}
  </React.StrictMode>,
)


