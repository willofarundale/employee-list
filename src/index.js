import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";

import EmployeeSearch from "./components/EmployeeSearch";

function App() {
  return (
    <div className="App">
      <EmployeeSearch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
