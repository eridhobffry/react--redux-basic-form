import React from "react";

import { Provider } from "react-redux";
import store from "../redux/create_store";

import App from "./pages";

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
