import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
// import Countdown from './components/Countdown';


import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
import 'foundation-sites/dist/js/foundation.min.js';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="Countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.querySelector('#root')
);
