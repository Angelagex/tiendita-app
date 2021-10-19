import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { login } from "../actions/authAction";
import Loading from "../components/Loading";
import { ListarItem } from "../actions/itemAction";
import { Main } from "../components/main/Main";
import { BuyEnd } from "../components/main/BuyEnd";
//import { AdminPanel } from "../components/appcontrol/AdminPanel";
import Registro from "../components/auth/Register";
import Login from "../components/auth/Login";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setsIsLoogedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setsIsLoogedIn(true);
        dispatch(ListarItem());
      } else {
        setsIsLoogedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={Login}
            isAuthenticated={isLooggedIn}
          />

          <PublicRoute
            path="/register"
            component={Registro}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/"
            component={Main}
            isAuthenticated={isLooggedIn}
          />

          <PrivateRoute
            exact
            path="/finish"
            component={BuyEnd}
            isAuthenticated={isLooggedIn}
          />



          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
