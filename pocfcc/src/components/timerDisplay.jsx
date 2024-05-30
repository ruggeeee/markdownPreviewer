import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimeLeft, toggleTimer, resetTimer, setIntervalId } from '../redux/timerSlice';


const TimerDisplay = () => {
  const dispatch = useDispatch();
  const { timeLeft, timerRunning, intervalId, sessionType } = useSelector((state) => state.timer);
  const beep = useRef(null);

  const playAudio = () => {
    const playPromise = beep.current.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Playback started
        }).catch(error => {
            console.log("Playback was prevented: ", error);
            // Handle interrupted play() request
            beep.current.pause();
            beep.current.currentTime = 0;
        });
    }
};

useEffect(() => {
    if (timeLeft === 0) {
        playAudio();
    } else if (!timerRunning) {
        beep.current.pause();
        beep.current.currentTime = 0;
    }
}, [timeLeft, timerRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
        beep.current.play().then(() => {
            console.log("Playback started successfully.");
        }).catch((error) => {
            console.log("Error starting playback: ", error);
        });
    } else if (!timerRunning) {
        beep.current.pause();
        beep.current.currentTime = 0;
    }
}, [timeLeft, timerRunning]);

  useEffect(() => {
    if (timerRunning && !intervalId) {
      const newIntervalId = setInterval(() => {
        dispatch(decrementTimeLeft());
      }, 1000);
      dispatch(setIntervalId(newIntervalId));
    } else if (!timerRunning && intervalId) {
      clearInterval(intervalId);
      dispatch(setIntervalId(null));
    }
    return () => intervalId && clearInterval(intervalId);
  }, [timerRunning, intervalId, dispatch]);

  const handleReset = () => {
    dispatch(resetTimer());
    beep.current.pause();
    beep.current.currentTime = 0;
  };

  const formattedTime = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

  return (
    <div>
      <h2 id="timer-label">{sessionType}</h2>
      <span id="time-left">{formattedTime}</span>
      <button onClick={() => dispatch(toggleTimer())}>{timerRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      <audio id="beep" ref={beep} preload="auto">
        <source src="beep.mp3" type="audio/mpeg" />
        <source src="beep.ogg" type="audio/ogg" /> {/* Fallback for different browsers */}
      </audio>
    </div>
  );
};

export default TimerDisplay;
