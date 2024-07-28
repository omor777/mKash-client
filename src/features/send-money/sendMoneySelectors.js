import { createSelector } from "@reduxjs/toolkit";

const selectSendMoney = (state) => state.sendMoney;

export const selectStatus = createSelector(
  selectSendMoney,
  (sendMoney) => sendMoney.status
);
