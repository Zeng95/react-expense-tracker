import 'assets/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.scss'

ReactDOM.render(
  // 此标签没有实际用途
  // 检查项目中是否有出错的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
