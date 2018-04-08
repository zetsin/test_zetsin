import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import routes from './routes'
import './index.css'

class Comp extends React.Component {
  render() {
    const { location } = this.props
    return (
      <div className="App">
        <header>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path} className={location.pathname === route.path ? 'active' : ''}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </header>
        <div className="container">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.component} exact />
            ))}
            <Redirect to="/contin"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Comp
