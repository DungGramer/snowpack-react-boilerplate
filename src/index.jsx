import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import TestView from "./test-view.jsx";

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// if (undefined /* [snowpack] import.meta.hot */) {
//   undefined /* [snowpack] import.meta.hot */
//     .accept();
// }
