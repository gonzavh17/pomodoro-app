import {React, useState, useEffect} from "react";
import "../Assets/Css/Pomodoro.css";
import PomodoroContainer from "../Containers/PomodoroContainer";




function Pomodoro() {

  const [timer, setTimer] = useState(25);



  const handleTimerChange = (newTimer) => {
    setTimer(newTimer)
  }

  return (
    <div className="pomodoro">
      <div className="pomodoro-container">
        <p className="title" >Minimalist Pomodoro</p>
        <div>
          <PomodoroContainer timer={timer} setTimer={setTimer} onTimerChange={handleTimerChange} />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
