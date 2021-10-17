import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppTienda from "./container/AppTienda";
import { Provider } from "react-redux";
import {store} from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppTienda />
  </Provider>,
  document.getElementById("root")
);
