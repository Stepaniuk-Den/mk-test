import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedFirstFighter:
  {
    id: 1,
    name: null,
    img_select: null,
    img_versus: null,
    img_gif: null,
  },
  selectedSecondFighter: 
  {
    id: 5,
    name: null,
    img_select: null,
    img_versus: null,
    img_gif: null,
  },
  selectFirstPlayer: null,
  selectSecondPlayer: null,
}

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelectedFirstFighter: (state, action) => {
      state.selectedFirstFighter = action.payload
    },
    setSelectFirstPlayer: (state, action) => {
      state.selectFirstPlayer = action.payload
    },
    setSelectedSecondFighter: (state, action) => {
      state.selectedSecondFighter = action.payload
    },
    setSelectSecondPlayer: (state, action) => {
      state.selectSecondPlayer = action.payload
    },

  }
})

export const {setSelectedFirstFighter, setSelectedSecondFighter, setSelectFirstPlayer, setSelectSecondPlayer} = selectSlice.actions;
export const selectReducer = selectSlice.reducer;
