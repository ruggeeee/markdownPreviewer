import { createAsyncThunk } from '@reduxjs/toolkit';
import { decrementTimeLeft, setIntervalId, toggleTimer } from './timerSlice';

export const handleTimerToggle = createAsyncThunk(
  'timer/handleTimerToggle',
  async (_, { dispatch, getState }) => {
    const { timerRunning, timeLeft, intervalId } = getState().timer;
    if (timerRunning && timeLeft > 0) {
      if (!intervalId) {
        const newIntervalId = setInterval(() => {
          dispatch(decrementTimeLeft());
        }, 1000);
        dispatch(setIntervalId(newIntervalId));
      }
    } else {
      clearInterval(intervalId);
      dispatch(setIntervalId(null));
      dispatch(toggleTimer());
    }
  }
);
