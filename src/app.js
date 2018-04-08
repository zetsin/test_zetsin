import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk-it'

import App from 'containers/App'
import stores from './stores'

const history = createHistory()

const store = createStore(
  combineReducers({
    ...stores,
    router: routerReducer
  }),
  applyMiddleware(thunk, routerMiddleware(history))
)

class Comp extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Comp
