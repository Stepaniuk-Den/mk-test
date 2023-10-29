import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFirstFighter: {
    id: 1,
  },
  selectedSecondFighter: {
    id: 5,
  },
  selectFirstPlayer: null,
  selectSecondPlayer: null,
  isSelected: false,
  error: null,
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setSelectedFirstFighter: (state, action) => {
      state.selectedFirstFighter = action.payload;
    },
    setSelectFirstPlayer: (state, action) => {
      state.selectFirstPlayer = action.payload;
    },
    setSelectedSecondFighter: (state, action) => {
      state.selectedSecondFighter = action.payload;
    },
    setSelectSecondPlayer: (state, action) => {
      state.selectSecondPlayer = action.payload;
    },
    deleteSelectedPlayers: (state, action) => {
      state.selectFirstPlayer = null;
      state.selectSecondPlayer = null;
    },
    setIsSelected: (state, action) => {
      state.isSelected = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  deleteSelectedPlayers,
  setSelectedFirstFighter,
  setSelectedSecondFighter,
  setSelectFirstPlayer,
  setSelectSecondPlayer,
  setIsSelected,
  setError,
} = selectSlice.actions;
export const selectReducer = selectSlice.reducer;
