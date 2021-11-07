
import React from "react";
import exercisesearch from "../pages/exercisesearch";
import exercise from "../2011_Compendium_of_Physical_Activities.json";

function searchexercise() {
  return (

    <div className ="searchexercise">
      <exercisesearch placeholder="Enter a Exercise"  data ={exercise}/>
    </div>
  )
}


export default searchexercise;



