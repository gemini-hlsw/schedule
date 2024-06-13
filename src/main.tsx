import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo-client";

import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";
import Home from "./components/Home";
import Validation from "./components/Validation/Validation";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "./index.scss";
import WebsocketProvider from "./websocket/WebsocketProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <WebsocketProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="operation" element={<h1>Operation</h1>} />
                <Route path="validation" element={<Validation />} />
                <Route path="simulation" element={<h1>Simulation</h1>} />
                <Route path="link1" element={<h1>link1</h1>} />
                <Route path="link2" element={<h1>link2</h1>} />
                <Route path="link3" element={<h1>link3</h1>} />
                <Route path="link4" element={<h1>link4</h1>} />
                <Route path="link5" element={<h1>link5</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </WebsocketProvider>
    </ThemeProvider>
  </React.StrictMode>
);
