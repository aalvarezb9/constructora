import { createSlice } from "@reduxjs/toolkit";

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState: {
    mobile: null
  },
  reducers: {
    getMobile: (state, action) => {
      state.mobile = action.payload
    }
  }
})

export const { getMobile } = mobileSlice.actions
export default mobileSlice.reducer