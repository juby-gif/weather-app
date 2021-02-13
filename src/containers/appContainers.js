
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";

import WeatherContainer from './weatherPageContainer';

class AppContainers extends Component {
  render() {
    return (
        <Router>
         <div>
           <Switch>
               <Route path="/" exact component={WeatherContainer} />
           </Switch>
         </div>
       </Router>
    );
  }
}
export default withRouter(AppContainers);
