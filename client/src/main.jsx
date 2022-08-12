import React from 'react'
import ReactDOM from 'react-dom/client'
import Reviews from './Reviews'
import './index.css'
import IntroReact from './IntroReact'
import AddReview from './AddReview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntroReact />
    <Reviews />
    <AddReview />
  </React.StrictMode>
)
