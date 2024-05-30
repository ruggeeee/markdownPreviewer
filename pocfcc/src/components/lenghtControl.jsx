import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBreak, decrementBreak, incrementSession, decrementSession } from '../redux/timerSlice';

const LengthControl = () => {
    const dispatch = useDispatch();
    const breakLength = useSelector(state => state.timer.breakLength);
    const sessionLength = useSelector(state => state.timer.sessionLength);

    return (
        <div>
            <div id="break-label">
                Break Length
                <button onClick={() => dispatch(decrementBreak())} id="break-decrement">-</button>
                <span id="break-length">{breakLength / 60}</span>
                <button onClick={() => dispatch(incrementBreak())} id="break-increment">+</button>
            </div>
            <div id="session-label">
                Session Length
                <button onClick={() => dispatch(decrementSession())} id="session-decrement">-</button>
                <span id="session-length">{sessionLength / 60}</span>
                <button onClick={() => dispatch(incrementSession())} id="session-increment">+</button>
            </div>
        </div>
    );
};

export default LengthControl;
