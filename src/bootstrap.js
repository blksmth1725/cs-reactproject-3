import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )(createStore),
)

import './style/main.scss'

import history from './history'

import BaseLayout from './components/base-layout'
import Login from './components/auth/login'
import SignUp from './components/auth/signup'
import Account from './components/account/account'
import Shop from './components/shop/shop'
import Review from './components/order/review'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <BaseLayout>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/account" exact component={Account} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/order/review" exact component={Review} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>,
    document.querySelector('.app-wrapper'),
  )
}

document.addEventListener('DOMContentLoaded', main)
