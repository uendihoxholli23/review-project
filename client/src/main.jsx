import React from 'react'
import ReactDOM from 'react-dom/client'
import Reviews from './Reviews'
import './index.css'
import AddEditReview from './AddEditReview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reviews />
    <AddEditReview />
  </React.StrictMode>
)
