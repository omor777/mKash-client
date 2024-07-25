import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state) => state.auth;

export const selectUser = createSelector(selectAuth, (auth) => auth.user);

export const selectIsUserExist = createSelector(
  selectAuth,
  (auth) => auth.isUserExist
);
