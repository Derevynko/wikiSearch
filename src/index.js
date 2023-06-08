import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import 'antd/dist/reset.css';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {store} from "./store/store.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);
