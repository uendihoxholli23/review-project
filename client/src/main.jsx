import React from 'react'
import ReactDOM from 'react-dom/client'
import Reviews from './Reviews'
import './index.css'
import IntoReact from './IntoReact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntoReact />
    <Reviews />
  </React.StrictMode>
)
