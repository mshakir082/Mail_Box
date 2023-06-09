import { createSlice } from '@reduxjs/toolkit';

const initialState = { mailData: [], firstTime: true, unreadMessageCount: 0 };

const mailSlice = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    firstTime(state, action) {
      state.firstTime = action.payload;
    },
    replace(state, action) {
      state.mailData = action.payload.mailData;
      state.firstTime = false;
      state.unreadMessageCount = action.payload.unreadMessageCount;
    },
    add(state, action) {
      return {
        ...state,
        mailData: [...state.mailData, action.payload]
      };
    },
     remove(state, action) {
      state.mailData = state.mailData.filter(mail => mail.id !== action.payload.id);
    },
    updateMailStatus(state, action) {
      const mailIndex = state.mailData.findIndex((mail) => mail.id === action.payload);
      if (mailIndex !== -1) {
        state.mailData[mailIndex].read = true;
      }
    },
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;