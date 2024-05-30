import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        sessionLength: 25,
        breakLength: 5
    },
    reducers: {
        incrementSession: state => {
            if (state.sessionLength < 60) {
                state.sessionLength += 1;
            }
        },
        decrementSession: state => {
            if (state.sessionLength > 1) {
                state.sessionLength -= 1;
            }
        },
        incrementBreak: state => {
            if (state.breakLength < 60) {
                state.breakLength += 1;
            }
        },
        decrementBreak: state => {
            if (state.breakLength > 1) {
                state.breakLength -= 1;
            }
        },
        resetSession: state => {
            state.sessionLength = 25;
            state.breakLength = 5;
        }
    }
});

export const { incrementSession, decrementSession, incrementBreak, decrementBreak, resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;