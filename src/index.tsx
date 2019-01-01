import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppFrame from './layout/frame';

const App = () => 
  <Router>
    <Route path='/' component={AppFrame} />
  </Router>

ReactDOM.render(
  <App/>,
  document.getElementById('container')
)