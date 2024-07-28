import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "number",
  mobile_number: null,
  amount: null,
  pin: null,
};

const sendMoneySlice = createSlice({
  name: "sendMoney",
  initialState,
  reducers: {
    addMobileNumber(state, action) {
      state.mobile_number = action.payload;
      state.status = "amount";
    },
    addAmount(state, action) {
      state.amount = action.payload;
      state.status = "pin";
    },
    // addPin(state, action) {
    //   state.pin = action.payload;
    // },
    resetState(state) {
      state.status = "number";
      state.mobile_number = null;
      state.amount = null;
      state.pin = null;
    },
  },
});

export const { addMobileNumber, addAmount, addPin, resetState } =
  sendMoneySlice.actions;

export default sendMoneySlice.reducer;
