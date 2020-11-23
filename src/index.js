import React from "react";
import ReactDom from "react-dom";
//import  { add, multiply, subtract, divide } from "./App.jsx";
import * as Calculator from "./App.jsx";

ReactDom.render(
  <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.multiply(1, 2)}</li>
    <li>{Calculator.subtract(1, 2)}</li>
    <li>{Calculator.divide(1, 2)}</li>
  </ul>,
  document.getElementById("root")
);
