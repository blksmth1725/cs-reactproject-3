import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import './style/main.scss'

import history from './history'

import BaseLayout from './components/base-layout'
import Login from './components/auth/login'
import SignUp from './components/auth/signup'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <BaseLayout>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>,
    document.querySelector('.app-wrapper'),
  )
}

document.addEventListener('DOMContentLoaded', main)
