import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    img: {}
  },
  reducers: {
    getImgIndex: (state, action) => {
      state.img = action.payload
    }
  }
})

export const { getImgIndex } = imageSlice.actions
export default imageSlice.reducer