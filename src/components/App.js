import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routers from '@/router/app'
import Mainfooter from '@/components/Footer/Mainfooter';
import NoMatch from '@/components/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Switch>
          {
            routers.map((item, index) => {
              return (
              <Route path = { item.path } component = { item.component } key = { index } />
              
                )
            })
          }
          <Redirect from = '/' to = '/home' />
          <Route  component = { NoMatch }  />
        </Switch>
        <Mainfooter />
      </div>
    );
  }
}

export default App;
