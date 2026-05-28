import React from "react";
import Card from "./componenets/Card"

const App = () => {
  return (
    <div className="parent">
      <Card user="Atif Hussain" age={14} skills ="Full Stack Web Developer"/>
      <Card user="Sajidul Hoque" age={21} skills = "Full Stack Web & App Dveloper"/>
    </div>
  )
}

export default App;