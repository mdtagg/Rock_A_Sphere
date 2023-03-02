import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { getClimbingAreas } from './climbingAreas'
// import { climbingAreas } from './climbingAreas'
// console.log(climbingAreas)
console.log(getClimbingAreas())


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
