import React, { useState, useEffect } from "react";
import WorkoutComponent from "./WorkoutComponent";
import SetupComponent from "./SetupComponent";
import PreloadedLists from "./PreloadedLists";
import WorkoutComplete from "./WorkoutComplete";

import Welcome from "./Welcome";

import "../App.css";

function Frame() {
  const [activeComponent, setActiveComponent] = useState("welcome");
  const [timerParameters, setTimerParameters] = useState({
    breakBetweenSets: 0,
    howLongExercise: 20,
    howLongRestBetweenExercises: 0,
    howManyExercisesPerSet: 1,
    howManySets: 1,
    exercises: [],
  });

  useEffect(() => {
    //console.log(timerParameters)
  }, [timerParameters]);

  return (
    <div className="frame">
       {activeComponent === "welcome" && (
        <Welcome activateComponent={setActiveComponent} />
      )}
      {activeComponent === "setupcomponent" && (
        <SetupComponent
          activateComponent={setActiveComponent}
          setTimerParameters={setTimerParameters}
          timerParameters={timerParameters}
        />
      )}
      {activeComponent === "workoutcomponent" && (
        <WorkoutComponent
          activateComponent={setActiveComponent}
          timerParameters={timerParameters}
        />
      )}
      {activeComponent === "preloadedlist" && (
        <PreloadedLists
          activateComponent={setActiveComponent}
          setTimerParameters={setTimerParameters}
          timerParameters={timerParameters}
        />
      )}
      {activeComponent === "workoutcomplete" && (
        <WorkoutComplete activateComponent={setActiveComponent} />
      )} 


    </div>
  );
}

export default Frame;
