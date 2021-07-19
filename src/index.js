import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import AboutUs from './component/AboutUs'
import Services from './component/Services'
import Gallery from './component/Gallery'
import Browse from './component/Browse'
import Blog from './component/Blog'
import Contact from './component/Contact'
import reportWebVitals from './reportWebVitals'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/AboutUs' component={AboutUs} />
      <Route path='/Services' component={Services} />
      <Route path='/Gallery' component={Gallery} />
      <Route path='/Blog' component={Blog} />
      <Route path='/Contact' component={Contact} />
      <Route path='/Browse' component={Browse} />
    </div>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()
