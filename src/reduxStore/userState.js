/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    logIn: (state, action) => action.payload.user,
    logOut: () => null,
  },
});

export const { logIn, logOut } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;

// /* eslint-disable default-param-last */
// // ACTIONS

// export const LOG_IN_ACTION = 'LOG_IN';
// export const LOG_OUT_ACTION = 'LOG_OUT';

// // reducer takes state and action as arguments and returns the updated version of the state.
// // is the function that handles all logic for changing the state

// const userInitialValue = null;

// const userReducer = (state = userInitialValue, action) => {
//   switch (action.type) {
//     case LOG_IN_ACTION:
//       return action.payload.user;

//     case LOG_OUT_ACTION:
//       return null;

//     default:
//       return state;
//   }
// };

// export default userReducer;
