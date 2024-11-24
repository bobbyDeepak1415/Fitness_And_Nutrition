
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDiet: null, 
};

const dietSlice = createSlice({
  name: "diet",
  initialState,
  reducers: {
    setSelectedDiet: (state, action) => {
      state.selectedDiet = action.payload;
    },
  },
});

export const { setSelectedDiet } = dietSlice.actions;

export default dietSlice.reducer;
