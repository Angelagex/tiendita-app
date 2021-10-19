import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
//import { useSelector } from "react-redux";
import { login } from "../actions/authAction";
//import Loading from "../components/Loading";
import { ListarItem } from "../actions/itemAction";
import { ListarProduct } from "../actions/productAction";

export const PrivateRoute = ({ component: Component, ...rest }) => {

   // const [checking, setChecking] = useState(true);
    const [isLooggedIn, setsIsLoogedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
                dispatch(ListarItem())
                dispatch(ListarProduct())
            } else {
                setsIsLoogedIn(false)
            }
        })
    }, [dispatch])

  return (
    <Route
      {...rest}
      render={(props) =>
        (isLooggedIn) ? (
          <Component {...props} />
        ) : (
          <>
            {alert("No tienes permitido el acceso a esta página")}
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    ></Route>
  );
};