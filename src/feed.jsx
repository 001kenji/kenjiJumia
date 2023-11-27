import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Logger from './Logger.jsx'
import CategoriesWeb from './CategoryWebsite.jsx'
import Feed from './JS/feed.jsx'

ReactDOM.createRoot(document.getElementById('feed')).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
)

