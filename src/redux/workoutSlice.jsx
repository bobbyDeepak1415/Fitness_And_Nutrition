
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWorkout: null, 
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload;
    },
  },
});

export const { setSelectedWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
