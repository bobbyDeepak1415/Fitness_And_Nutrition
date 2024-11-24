
import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./workoutSlice";
import dietReducer from "./dietSlice";

const store = configureStore({
  reducer: {
    workout: workoutReducer,
    diet: dietReducer,
  },
});

export default store;
