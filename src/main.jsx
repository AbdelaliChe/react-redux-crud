import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User.jsx";
import usersReducer from "./features/Users.jsx";
import colorReducer from "./features/Color.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    color: colorReducer,
    users: usersReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
