import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Hello from '../page/js/hello';
import FirstPage from '../page/js/firstPage';
import NotFound from '../page/js/notFound';
import Detail from '../page/js/detail';
import Home from '../page/js/home';

class RoutMap extends Component {
    render() {
        return ( 
          <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/hello' component={Hello}/>
                <Route path='/firstpage' component={FirstPage}/>
                <Route path='/detail/:id' component={Detail}/>
                <Route path='*' component={NotFound}/>
              </Switch>
          </Router>
        );
    }
}

export default RoutMap;