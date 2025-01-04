import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import mySoundShortBeep from "../assets/beep3.wav";
import mySoundLongBeep from "../assets/beep-long.wav";

const CircularTimerButton = ({
  timerParameters,
  setSetName,
  setExerciseName,
  setNextExerciseName,
  activateComponent,
}) => {
  const exerciseLength = timerParameters.exercise
    ? timerParameters.exercise.length
    : 0; //from preloaded list

  const [timeLeft, setTimeLeft] = useState(0);
  const [durationPie, setDurationPie] = useState(0); //duration to pie time elapse
  const [isRunning, setIsRunning] = useState(false);
  const [currentStage, setCurrentStage] = useState("exercise"); // exercise, rest, setBreak

  const [numberOfExercises, setNumberOfExercises] = useState(
    exerciseLength === 0
      ? timerParameters.howManyExercisesPerSet - 1
      : exerciseLength - 1
  );
  //PASSED PROP FROM SETUP COMPONENT (-1 BECAUSE 0 IS LAST ONE)
  const [durationExercise, setDurationExercise] = useState(
    timerParameters.howLongExercise
  );
  //PASSED PROP FROM SETUP COMPONENT

  const [numberOfRests, setNumberOfRests] = useState(
    timerParameters.howManyExercisesPerSet - 2
  );
  //one less than numberOfExercises
  const [durationRest, setDurationRest] = useState(
    timerParameters.howLongRestBetweenExercises
  ); //PASSED PROP FROM SETUP COMPONENT

  const [numberOfSets, setNumberOfSets] = useState(timerParameters.howManySets); //PASSED PROP FROM SETUP COMPONENT
  const [breakBetweenSets, setBreakBetweenSets] = useState(
    timerParameters.breakBetweenSets
  ); //PASSED PROP FROM SETUP COMPONENT

  const [currentExercise, setCurrentExercise] = useState(
    timerParameters.exercise ? timerParameters.exercise[0] : 1
  );

  const [currentSet, setCurrentSet] = useState(1);

  const [playShortBeep] = useSound(mySoundShortBeep);
  const [playLongBeep] = useSound(mySoundLongBeep);

  const pauseTime = () => {
    if (numberOfSets < 1) {
      return;
    }
    if (!isRunning && (timeLeft === 0 || timeLeft === -1)) {
      setTimeLeft(durationExercise);
      setDurationPie(durationExercise);
      setCurrentStage("exercise");
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  useEffect(() => {
    console.log(currentStage)
    if (timerParameters.exercise) {
      setCurrentExercise(
        timerParameters.exercise[exerciseLength - numberOfExercises - 1]
      );
      setNextExerciseName
      (timerParameters.exercise[exerciseLength - numberOfExercises])
     
    }

    if (exerciseLength === 0) {
      setNextExerciseName
      (
        currentExercise + 1
      );
      if(numberOfExercises === 0){

        setNextExerciseName
        ("Last one in this set!")
    }
  }

    setSetName(numberOfSets);
/*     if (currentStage !== "done") {
      setExerciseName(currentExercise);
     
    } */

      if (currentStage === "exercise" || currentStage === "rest") {
        setExerciseName(currentExercise);
       
      }
      if (currentStage === "setBreak") {
        setExerciseName("Set break");
        setNextExerciseName("New set starting with:  " + timerParameters.exercise[exerciseLength - numberOfExercises - 1])
       
      }

    if (isRunning && timeLeft > -1) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

      if (timeLeft <= 3 && timeLeft > 0) {
        playShortBeep();
      }
      if (isRunning && timeLeft === 0) {
        playLongBeep();
      }

      return () => clearTimeout(timer);
    }

    if (isRunning && timeLeft === -1) {
      setTimeLeft(0);

      if (currentStage === "exercise") {
        if (numberOfExercises >= 1) {
          setNumberOfExercises(numberOfExercises - 1);
          setCurrentExercise(
            exerciseLength === 0 ? currentExercise + 1 : currentExercise
          ); // if exerciseLength === 0

          setTimeLeft(durationRest);
          setDurationPie(durationRest);
          setCurrentStage("rest");
        } else if (numberOfSets >= 2) {
          setNumberOfSets(numberOfSets - 1);

          setNumberOfExercises(timerParameters.howManyExercisesPerSet - 1); // Reset exercises is number of sets > 1
          setCurrentExercise(
            timerParameters.exercise ? timerParameters.exercise[0] : 1
          ); // if exerciseLength === 0
          setNumberOfRests(timerParameters.howManyExercisesPerSet - 2); // Reset exercises is number of sets > 1

          setTimeLeft(breakBetweenSets);
          setDurationPie(breakBetweenSets);
          setCurrentStage("setBreak");
          setExerciseName("Set break");
        } else if (numberOfSets === 1) {
          setCurrentStage("done");
          setIsRunning(false);
          setNumberOfSets(numberOfSets - 1);
          setExerciseName(numberOfExercises);
        }
      } else if (currentStage === "rest") {
        setTimeLeft(durationExercise);
        setDurationPie(durationExercise);
        setCurrentStage("exercise");

      } else if (currentStage === "setBreak") {
        setTimeLeft(durationExercise);
        setDurationPie(durationExercise);
        setCurrentStage("exercise");
        
                      
      }

    }else if(currentStage === "done"){
      activateComponent("workoutcomplete")
    }
  }, [
    isRunning,
    timeLeft,
    numberOfExercises,
    numberOfRests,
    numberOfSets,
    currentStage,
    exerciseLength
  ]);

  const percentage = ((durationPie - timeLeft) / durationPie) * 100;

  return (
    <div>
      <button
        onClick={pauseTime}
        className="circular-timer-button"
        style={{
          borderRadius: "50%",
          background: `conic-gradient(#3498db ${percentage}%, #ecf0f1 ${percentage}% 100%)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: `clamp(4rem, 6rem, 10rem)`,
          fontWeight: "bold",
          color: "#2c3e50",
          borderColor: `yellow`,
          borderWidth: "14px",
          cursor: "pointer",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "2rem",
              color: "darkblue",
              margin: "0px",
            }}
          >
            {numberOfSets === 0 ? "Done!" : isRunning ? "Pause" : "Start"}
          </p>
          {timeLeft}
        </div>
      </button>
    </div>
  );
};

export default CircularTimerButton;
