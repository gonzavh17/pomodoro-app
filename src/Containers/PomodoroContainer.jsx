import React, { useState, useEffect } from "react";
import "../Assets/Css/Pomodoro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRotateBack,
} from "@fortawesome/free-solid-svg-icons";

function Clock({timer, setTimer, onTimerChange }) {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState("workTime");
  const [intervalCompleted, setIntervalCompleted] = useState(1)
  

  let clock;

  /* CHANGE BUTTONS */
  const handleWorkTimer = () => {
    onTimerChange(25);
    setSeconds(0)
    setIsRunning(false)
    setTimerType("workTime")
    console.log(timerType)
  };

  const handleShortBreak = () => {
    onTimerChange(7);
    setSeconds(0)
    setIsRunning(false)
    setTimerType("shortBreak")
  };

  const handleLongBreak = () => {
    onTimerChange(15);
    setSeconds(0)
    setIsRunning(false)
    setTimerType("longBreak")
  };

/* CLOCK */
  useEffect(() => {
    if (isRunning) {
      clock = setInterval(() => {
        if (seconds !== 0) {
          setSeconds(seconds - 1);
        } else if (timer !== 0 && seconds === 0) {
          setSeconds(59);
          setTimer(timer - 1);
        } else {
            if(timerType === "workTime" && intervalCompleted < 4){
              alert(`pomodoro ${intervalCompleted} terminado`)
              setIntervalCompleted(intervalCompleted+1)
              handleShortBreak()
            } else if(intervalCompleted === 4){
              alert("felicitaciones terminaste 4 pomodoros, es hora del long break")
              setIntervalCompleted(0)
              handleLongBreak()
            } else {
              handleMoment()
            }
        }
      }, 1000);
    }

    return () => clearInterval(clock);
  }, [seconds, setSeconds, isRunning]);

  /* MOMENT */
   
const handleMoment = () => {
  if(timerType === "shortBreak" && timer === 0 && seconds === 0){
    handleWorkTimer()
    alert("short break terminado, hora de trabajar")
  } else if (timerType === "longBreak" && timer === 0 && seconds === 0){
    handleWorkTimer()
    alert("long break terminado hora de trabajar")
  }
}

  /* START/STOP */
  const handleStartStop = () => {
    if (isRunning === false) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

/* RESET */
  const handleResetTimer = () => {
    if (timerType === "workTime") {
      handleWorkTimer()
    } else if (timerType === "shortBreak") {
      handleShortBreak()
    } else if (timerType === "longBreak") {
      handleLongBreak()
    }
  };


  return (
    <div>
      <div className="clock-container">
        <p className="clock minutes">{timer}</p>
        <span>:</span>
        <p className="clock seconds">
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>

      <div className="buttons-container">
        <button className="btn" onClick={handleStartStop}>
          {isRunning ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button className="btn" onClick={handleResetTimer}>
          <FontAwesomeIcon icon={faRotateBack} />
        </button>
      </div>

      <div className="interval-container">
        <div className="input-container">
          <button className="btn" onClick={handleWorkTimer}>
            Work Time
          </button>
        </div>
        <div className="input-container">
          <button className="btn" onClick={handleShortBreak}>
            Short Break
          </button>
        </div>
        <div className="input-container">
          <button className="btn" onClick={handleLongBreak}>
            Long Break
          </button>
        </div>
      </div>
       <div className="interval-container">
          <p>#{intervalCompleted}</p>
          
        </div>
    </div>
  );
}

export default Clock;
