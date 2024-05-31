import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TimerDisplay from './timerDisplay';
import Controls from './controls';
import LengthControl from "./lenghtControl";

const PomodoroClock = () => {
  const dispatch = useDispatch();
  const { sessionLength, breakLength, timeLeft, isRunning } = useSelector(state => state.timer);

  return (
    <div className="pomodoro-clock">
      <TimerDisplay timeLeft={timeLeft} />
      <Controls isRunning={isRunning} dispatch={dispatch} />
      <LengthControl
        label="Session Length"
        length={sessionLength}
        onIncrement={() => dispatch({ type: 'INCREMENT_SESSION' })}
        onDecrement={() => dispatch({ type: 'DECREMENT_SESSION' })}
      />
      {/* <LengthControl
        label="Break Length"
        length={breakLength}
        onIncrement={() => dispatch({ type: 'INCREMENT_BREAK' })}
        onDecrement={() => dispatch({ type: 'DECREMENT_BREAK' })}
      /> */}
    </div>
  );
};

export default PomodoroClock;
