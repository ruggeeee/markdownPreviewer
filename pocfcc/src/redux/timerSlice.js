import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    breakLength: 300, // 5 minutes
    sessionLength: 1500, // 25 minutes
    timeLeft: 1500, // Initially set to session length
    timerRunning: false,
    sessionType: 'Session',
    intervalId: null,
  },
  reducers: {
    incrementBreak: (state) => {
      if (state.breakLength < 3600) state.breakLength += 60;
    },
    decrementBreak: (state) => {
      if (state.breakLength > 60) state.breakLength -= 60;
    },
    incrementSession: (state) => {
      if (state.sessionLength < 3600) state.sessionLength += 60;
    },
    decrementSession: (state) => {
      if (state.sessionLength > 60) state.sessionLength -= 60;
    },
    toggleTimer: (state, action) => {
      state.timerRunning = action.payload;
  },
  resetTimer: (state) => {
    state.breakLength = 300;  // reset to 5 minutes
    state.sessionLength = 1500; // reset to 25 minutes
    state.timeLeft = state.sessionLength;
    state.timerRunning = false;
    state.sessionType = 'Session';
    if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
    }
},
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    setIntervalId: (state, action) => {
      state.intervalId = action.payload;
  },
  decrementTimeLeft: (state) => {
    if (state.timeLeft > 0) {
        state.timeLeft -= 1;
    } else if (state.sessionType === 'Session') {
        state.sessionType = 'Break';
        state.timeLeft = state.breakLength;
    } else {
        state.sessionType = 'Session';
        state.timeLeft = state.sessionLength;
    }
},
  },
});

export const { incrementBreak, decrementBreak, incrementSession, decrementSession,
               toggleTimer, decrementTimeLeft, setIntervalId, resetTimer, setTimeLeft } = timerSlice.actions;

export default timerSlice.reducer;
