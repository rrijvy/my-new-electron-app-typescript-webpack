import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { store } from "./store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.body);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
