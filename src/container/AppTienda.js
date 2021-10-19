import React from "react";
import { useSelector } from "react-redux";
import AppRouter from "../routes/AppRouter";
import GlobalStyles from "../styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Routess from "../routes/index"

const AppTienda = () => {
  return (
    <GlobalStyles />,
      <Provider store= {store}>
        <Routess />
      </Provider>
  );
};

export default AppTienda;
