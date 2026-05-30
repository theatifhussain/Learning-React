import React from "react";
import Card from "./components/Cards.jsx"

const app = () => {
  return (
    <div className="parent">
      <Card company = "Amazon" time = "3 days" logo = "https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg" position = "Senior UI/UX Designer" b1 = "Part Time" b2 = "Senior level"  rate = "$120/hr" place = "Banglore India"/>
      <Card company = "Google" time ="33 days" logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s" position = "Graphic Designer" b1 = "Part Time" b2 = "Flexible Schedule" rate = "$150-220K" place = "Delhi India"/>
    </div>
  )
}

export default app;