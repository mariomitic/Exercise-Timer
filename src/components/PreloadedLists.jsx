import React, { useState } from "react";

function PreloadedLists({
  activateComponent,
  timerParameters,
  setTimerParameters,
}) {
  const upperBodyHIIT = [
    "1.PUSH TO DOWNWARD DOG",
    "2.LYING KNEE TO ELBOW",
    "3.PLANK TOE TAP",
    "4.LYING BACK PULL",
    "5.SIDE TO SIDE",
    "6.RUSSIAN TWIST",
    "7.PUSH UPS",
    "8.SIT UP",
    "9.RUNNING PLANK",
    "10.ALT TOE TOUCH",
    "11.PUSH UP PLANK",
    "12.ELBOWS DIP",
    "13.SPIDER PLANK",
    "14.FLUTTER KICKS",
    "15.BICYCLE CRUNCHES",
    "16.DIVE BOMBER",
    "17.BUTTERFLY",
    "18.SHOULDER TAP",
    "19.CURL UP",
    "20.LEVERED PLANK",
  ];

  const absWorkout = [
    "1.BENT OVER MOUNTING CLIMNING",
    "2.ALETERNATING SIDE HIPS",
    "3.ABDOMENAL JUMPS",
    "4.PLANK OPENING AND CLOSING",
  ];

  const updatedList = timerParameters;

  return (
    <div className="workoutList">
      <h2 style={{ paddingTop: 0 }}> Available lists:</h2>
      <div>
        <button
          onClick={() => {
            (updatedList.exercise = upperBodyHIIT),
              (updatedList.howManyExercisesPerSet = upperBodyHIIT.length),
              activateComponent("workoutcomponent"),
              setTimerParameters(updatedList);
          }}
        >
          Upper Body HITT
        </button>
        <a
          href="https://www.youtube.com/watch?v=QUz8YAa2J9c&list=PLZLZ-X0g0Kow1zK4zSXzsbcoGaIoQSNDz&index=1&t=3s"
          target="_blank"
        >
          YouTube link
        </a>
      </div>

      <div>
        <button
             onClick={() => {
            (updatedList.exercise =absWorkout),
              (updatedList.howManyExercisesPerSet = absWorkout.length),
              activateComponent("workoutcomponent"),
              setTimerParameters(updatedList);
          }}
        >Abs workout</button>
        <a href="https://www.facebook.com/reel/565486383026648" target="_blank">
          Meta link
        </a>
      </div>

      <div>
        <button>Legs 10min workout</button>
        <a
          href="https://www.youtube.com/watch?v=EsxpZcApZDs&list=PLZLZ-X0g0Kow1zK4zSXzsbcoGaIoQSNDz&index=4&t=19s"
          target="_blank"
        >
          YouTube link
        </a>
      </div>
    </div>
  );
}

export default PreloadedLists;
