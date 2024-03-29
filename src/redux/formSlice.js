import { createSlice } from "@reduxjs/toolkit";
import { FormData } from "../data/FormData";
const initialState = {
  submissions: FormData,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitForm: (state, action) => {
      return {
        ...state,
        submissions: [...state.submissions, action.payload],
      };
    },
  },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
