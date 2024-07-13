import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// apollo provider
import { ApolloProvider } from "@apollo/client";
import apiClient from "./api/apiClient";

// router
import router from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apiClient}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
