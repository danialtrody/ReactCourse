import React, { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [headingText,setHeadingText] = useState("");


  function handleChange(event){
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleSubmit(){
    event.preventDefault();
    setHeadingText(name)
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleSubmit} >
        <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?" 
        value={name}
        />
        <button type="submit" /*onClick={handleSubmit} */>Submit</button>
      </form>
    </div>
  );
}

export default App;
