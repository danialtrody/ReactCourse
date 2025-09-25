import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const fName = "Danial"
const lName = "Trody"
const luckyNumber = 8;

root.render(
    <>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
    </>
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
