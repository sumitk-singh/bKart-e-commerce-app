import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FilterProvider } from "./Contexts/filterContext";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    
     <Router>
    <App />
    </Router>
   
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
