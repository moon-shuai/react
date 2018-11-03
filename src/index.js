import React from 'react';
import ReactDOM from 'react-dom';
import store from '@/store/store'
import App from '@/components/App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './main.scss';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Provider } from 'react-redux'
import Detail from '@/components/Detail';
import Seckill from '@/components/Seckill';
import DetailBei from '@/components/DetailBei';
store.subscribe(render)  //  可以手动订阅更新，也可以事件绑定到视图层。 render 就是封装的函数

render();  // 先调用这一函数

function render () {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store = { store }>
        <Router>
          <Switch>
            <Route path='/seckill/' component = { Seckill } />
            <Route path='/detailBei/' component = { DetailBei } />
            <Route path='/detail/:activityId/:itemId' component = { Detail } />
            <Route path='/' component = { App } />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
    , document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
