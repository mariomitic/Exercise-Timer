import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import "../App.css";

function SetupComponent({ activateComponent, setTimerParameters }) {
  const [howManySets, setHowManySets] = useState(1);
  const [breakBetweenSets, setBreakBetweenSets] = useState(0);
  const [howManyExercisesPerSet, setHowManyExercisesPerSet] = useState(1);
  const [howLongExercise, setHowLongExercise] = useState(20);
  const [howLongRestBetweenExercises, setHowLongRestBetweenExercises] =
    useState(0);

  useEffect(() => {
    setTimerParameters({
      howManySets,
      breakBetweenSets,
      howManyExercisesPerSet,
      howLongExercise,
      howLongRestBetweenExercises,
    });
  }, [
    howManySets,
    breakBetweenSets,
    howManyExercisesPerSet,
    howLongExercise,
    howLongRestBetweenExercises,
  ]);

  const handleBreakChange = (e) => {
    setBreakBetweenSets(parseInt(e.target.value));
  };
  const handleExerciseLength = (e) => {
    setHowLongExercise(parseInt(e.target.value));
  };
  const handleRestBetweenExercises = (e) => {
    setHowLongRestBetweenExercises(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <h4>Set your workout timer...</h4>
        <div className="middle_setup">
          <div style={{ display: "inline-flex" }}>
            <p>Sets</p>{" "}
            <Counter count={howManySets} setCount={setHowManySets} />
            <p
              style={{
                marginLeft: "1rem",
              }}
            >
              Set Break
            </p>
            <input
              type="number"
              min="0"
              placeholder="def 0s"
              onChange={handleBreakChange}
            ></input>
          </div>
          <hr></hr>

          <div className="SetExercises">
            <p>Exercises per set</p>
            <Counter
              count={howManyExercisesPerSet}
              setCount={setHowManyExercisesPerSet}
            />
            <p>or</p>
            <button
              onClick={() => activateComponent("preloadedlist")}
              className="btn btn-dark"
            >
              Load exercise list
            </button>
          </div>

          <div className="SetExercises">
            <p className="addMargin">Set single exercise time: </p>
            <input
              type="number"
              min="0"
              placeholder="def 20s"
              onChange={handleExerciseLength}
            ></input>
          </div>
          <div className="SetExercises">
            <p className="addMargin">Set single rest time: </p>
            <input
              type="number"
              min="0"
              placeholder="def 0s"
              onChange={handleRestBetweenExercises}
            ></input>
          </div>
        </div>
        <hr></hr>
        <div className="bottom_setup">
          <button onClick={() => activateComponent("workoutcomponent")}>
            Start your workout!
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupComponent;
