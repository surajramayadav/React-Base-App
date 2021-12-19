import { createSlice } from "@reduxjs/toolkit";

export const homeslice = createSlice({
  name: "company",
  initialState: {
    loading: false,
    employees: [],
    department: [],
  },
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setemployees: (state, action) => {
      state.employees = action.payload;
    },
    setdepartment: (state, action) => {
      state.department = action.payload;
    },
   
  },
});

//actions
export const { setloading, setemployees, setdepartment } = homeslice.actions;

export default homeslice.reducer;
