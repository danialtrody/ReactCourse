import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
     name="Beyonce"
     src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
     phone="+123 456 789"
     email="b@beyonce.com"
    />
    <Card
     name="Jack Bauer"
     src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
     phone="+987 654 321"
     email="jack@nowhere.com"
    />
    <Card
     name="Chuck Norris"
     src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrR_hsgVn1ZH9FYB2pFu3dLOwYSTAwvHaXEpzyUMLmVwH8ZxmuwZWCGPkOI8DqkR9nrrDvCobWcIc9XZOL3OIgwjipqm3UpFcRPfcSWCnNEA"
     phone="+918 372 574"
     email="gmail@chucknorris.com"
    />
  </div>
)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
