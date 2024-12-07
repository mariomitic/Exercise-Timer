import React, { useState } from "react";

function PreloadedLists({
  activateComponent,
  timerParameters,
  setTimerParameters,
}) {
  const upperBodyHIIT = [
    "PUSH TO DOWNWARD DOG",
    "LYING KNEE TO ELBOW",
    "PLANK TOE TAP",
    "LYING BACK PULL",
    "RUSSIAN TWIST",
    "PUSH UPS",
    "RUNNING PLANLK",
    "ALT TOE TOUCH",
    "PUSH UP PLANK",
    "ELBOWS DIP",
    "SPIDER PLANK",
    "FLUTTER KICKS",
    "BICYCLE CRUNCHES",
    "DIVE BOMBER",
    "BUTTERFLY",
    "SHOULDER TAP",
    "LEVERED PLANK",
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
        <button>Abs 10min workout</button>
        <a href="https://www.youtube.com/watch?v=n_2g-msWGmE" target="_blank">
          YouTube link
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
