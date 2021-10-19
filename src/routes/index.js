import React from 'react'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";

import routes from './routes';
import { PrivateRoute } from "./Private2";

const Routess = () => {
  return (
    <Router basename ="/">
        <Switch>
          {routes.private.map(({ path, component, name }) => (
            <PrivateRoute exact key={name} path={path} component={component} />
          ))}
          {routes.public.map(({path, component, name}) => (
            <Route exact path={path} component={component} key={name} />
          ))}
        </Switch>
    </Router>
  )
}

export default Routess