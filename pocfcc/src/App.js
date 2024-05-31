import logo from './logo.svg';
import React from 'react';
import TimerDisplay from "./components/timerDisplay";
import LengthControl from "./components/lenghtControl";
import Controls from "./components/controls";
import BreakLabel from './components/breakLabel';
import SessionLabel from './components/sessionLabel';
import PomodoroClock from './components/pomodoroClock';
import './App.css';

function App() {
  return (
    <div className="app">
            <h1>Pomodoro Clock</h1>
            {/* <BreakLabel /> */}
            <PomodoroClock />
            {/* <SessionLabel /> */}
            {/* <TimerDisplay />  
            <LengthControl />  
            <Controls />        */}
        </div>
  );
}

export default App;
