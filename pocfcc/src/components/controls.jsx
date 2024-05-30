import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer, resetTimer } from '../redux/timerSlice';

const Controls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button id="start_stop" onClick={() => dispatch(toggleTimer())}>
                Start/Stop
            </button>
            <button id="reset" onClick={() => dispatch(resetTimer())}>
                Reset
            </button>
        </div>
    );
};

export default Controls;
