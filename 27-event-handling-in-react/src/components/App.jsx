import React, { useState } from "react";

function App() {

  const [headingText , setHeadingText] = useState("Hello");
  const [isMouseOver , setIsMouseOver] = useState(false);


  function handleClick(){
    setHeadingText("Submited");
  }

  function handleMouseOver(){
    setIsMouseOver(true);
  }

  function handleMouseOut(){
    setIsMouseOver(false);
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{background: isMouseOver? "black":"white"}}
      onClick={handleClick} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
