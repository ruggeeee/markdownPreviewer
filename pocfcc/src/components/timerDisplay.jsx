import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimeLeft, toggleTimer, resetTimer } from '../redux/timerSlice';

const TimerDisplay = () => {
  const dispatch = useDispatch();
  const { timeLeft, timerRunning, sessionType } = useSelector((state) => state.timer);
  const beep = useRef(null);

  // Helper function to format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Function to handle audio playback
  const playAudio = () => {
    beep.current.currentTime = 0; // Reset audio to start
    beep.current.play();
  };

  // Effect to handle the timer countdown
  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        dispatch(decrementTimeLeft());
      }, 1000);
    } else if (!timerRunning && intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, dispatch]);

  // Effect to handle audio when the timer reaches zero
  useEffect(() => {
    if (timeLeft === 0) {
      playAudio();
      dispatch(toggleTimer(false)); // Optionally stop the timer
    }
  }, [timeLeft, dispatch]);

  return (
    <div className="timer-display">
      <h2 id="timer-label">{sessionType}</h2>
      <span id="time-left">{formatTime(timeLeft)}</span>
      <audio id="beep" ref={beep} preload="auto" src="beep.mp3" type="audio/mpeg" />
    </div>
  );
};

export default TimerDisplay;
