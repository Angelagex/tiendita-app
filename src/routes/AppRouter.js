import React, { useState } from "react";
//import { firebase } from "../firebase/firebase-config";
//import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
//import { login } from "../actions/authAction";
//import Loading from "../components/Loading";
//import { ListarItem } from "../actions/itemAction";
//import { Main } from "../components/main/Main";
//import { BuyEnd } from "../components/main/BuyEnd";
import { AdminPanel } from "../components/appcontrol/AdminPanel";
//import { useSelector } from "react-redux";

const AppRouter = () => {
  //const [checking, setChecking] = useState(true);
  //const [isLooggedIn, setsIsLoogedIn] = useState(false);

 // const dispatch = useDispatch();
  /*
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
            setsIsLoogedIn(true)
            dispatch(ListarItem(user.uid))
        } else {
            setsIsLoogedIn(false)
        }
        setChecking(false)
    })
}, [dispatch, setChecking])

if (checking) {
    return <Loading />
}

*/
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/"
            component={Main}
            isAuthenticated={isLooggedIn}
          />

          <PublicRoute
            exact
            path="/finalizar"
            component={BuyEnd}
            isAuthenticated={isLooggedIn}
          />

          <PublicRoute
            exact
            path="/auth"
            component={AdminPanel}
            isAuthenticated={isLooggedIn}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
