import React from "react";
import AppRouter from "../routes/AppRouter";
import GlobalStyles from "../styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "../store/store";

const AppTienda = () => {
  return (
    <GlobalStyles />,
      <Provider store= {store}>
        <AppRouter />
      </Provider>
  );
};

export default AppTienda;
