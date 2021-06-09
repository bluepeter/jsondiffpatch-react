import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./main";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.querySelector("#wrapper")
);
