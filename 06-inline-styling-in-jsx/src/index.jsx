import React from "react";
import ReactDOM from "react-dom/client";

const root =   ReactDOM.createRoot(document.getElementById("root"))

const customeStyle = {
    color:"red",
    fontSize: "20px",
    border: "1px solid black"
}

customeStyle.color = "blue";


root.render(
    <h1 style={ customeStyle }>Hello world!</h1>
)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
