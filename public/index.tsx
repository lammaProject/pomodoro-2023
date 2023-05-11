import React from "react";
import ReactDOM from "react-dom";
import { App } from "../src/App";
import { store } from '../src/store/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
