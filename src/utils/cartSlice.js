import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const resName = action.payload.resInfo.name;
      const foodName = action.payload.foodInfo.name;
      let stateItems = state.items;

      if (!stateItems[resName]) {
        stateItems[resName] = {};
      }
      if (!stateItems[resName][foodName]) {
        stateItems[resName][foodName] = {
          qty: 0,
          info: action.payload.foodInfo,
        };
      }
      stateItems[resName][foodName]["qty"] += 1;
      state.items = stateItems;
    },
    removeItem: (state, action) => {
      const resName = action.payload.resInfo.name;
      const foodName = action.payload.foodInfo.name;
      let stateItems = state.items;

      if (stateItems[resName][foodName]["qty"] == 1) {
        delete stateItems[resName][foodName];
      } else {
        stateItems[resName][foodName]["qty"] -= 1;
      }

      state.items = stateItems;
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
