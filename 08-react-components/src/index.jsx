import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import List from "./List";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Heading />
    <List />
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
