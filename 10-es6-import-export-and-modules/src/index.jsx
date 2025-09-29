import React from "react";
import ReactDOM from "react-dom";
import pi,{doublePi,triplePi} from "./math";
// import * as pi  from "./math"; -> pi.deafult / pi.doublePi / pi.triplePi

const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(
  
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
 
)



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
