import { configureStore } from "@reduxjs/toolkit";

import { selectReducer } from "./reducer";

export const store = configureStore({
 reducer: {
  select: selectReducer,
},
});
  
