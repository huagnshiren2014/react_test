import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NotFound from '../page/404/notFound';
import buyHouseIndex from '../page/buyhouse/js/buyhouse.index';
import houseIndex from '../page/house/js/house.index';
import pickupIndex from '../page/pickup/js/pickup.index';
import Home from '../page/home/home';

class RoutMap extends Component {
    render() {
        return ( 
          <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/house/index' component={houseIndex}/>
                <Route path='/buyhouse/index' component={buyHouseIndex}/>
                <Route path='/pickup/index' component={pickupIndex}/>
                <Route path='*' component={NotFound}/>
              </Switch>
          </Router>
        );
    }
}

export default RoutMap;