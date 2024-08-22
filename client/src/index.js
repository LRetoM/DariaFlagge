import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./context/store";

/**
 * The entry point for the React application.
 * This file is responsible for rendering the root component (`App`) within the DOM element with the id "root".
 * It also wraps the `App` component in a Redux `Provider` to make the Redux store available throughout the app.
 *
 * @module index
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/**
 * Optional: Measures performance metrics of the app and logs or sends them to an analytics endpoint.
 * To use this feature, pass a function like `console.log` to log the results, or configure an analytics service.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
