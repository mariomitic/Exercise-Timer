import React, { useState, useEffect } from "react";
import "../App.css";
import Timer from "./Timer";

function WorkoutComponent({ activateComponent, timerParameters }) {
  const [exerciseName, setExerciseName] = useState(0);
  const [nextExerciseName, setNextExerciseName] = useState(1);
  const [setName, setSetName] = useState(0);

  useEffect(() => {
    if (nextExerciseName === undefined) {
      setNextExerciseName("Last one in this set!");
      
    }
    //console.log(timerParameters)
    
    //}
  }, [nextExerciseName, timerParameters]);

  return (
    <div>
      <div>
        <div className="top_content">
          <button
            onClick={() => activateComponent("setupcomponent")}
            className="btn btn-outline-secondary"
          >
            {" "}
            Start Over
          </button>
          <h2>Sets left: {setName}</h2>
          <h4>Exercise: {exerciseName}</h4>
        </div>
        <div className="middle_content">
          <Timer
            timerParameters={timerParameters}
            setSetName={setSetName}
            setExerciseName={setExerciseName}
            setNextExerciseName={setNextExerciseName}
            activateComponent={activateComponent}
          />
        </div>
        <div id="bottom_content">
          <h3>Next: {exerciseName === 0 ? 0 : nextExerciseName}</h3>
        </div>
      </div>
    </div>
  );
}

export default WorkoutComponent;
