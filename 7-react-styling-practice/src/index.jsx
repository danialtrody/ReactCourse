//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom/client";

const time = new Date(1,1,2025, 7);

function getMessage(time){
    const currentTime=time.getHours();
    let message = "";
    let color = "";

    if(currentTime < 12 ){
        message = "Good morning";
        color = "red";
    }else if(currentTime < 18){
        message = "Good Afternoon";
        color = "green";
    }else{
        message = "Good Evening";
        color = "blue";
    }

    return (
        <h1 className="heading" style={{color:color}}>
            {message}
        </h1>
    )   
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    {getMessage(time)}
    </>
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
