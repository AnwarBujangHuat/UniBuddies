import { createSelector } from '@reduxjs/toolkit';
export const getUser = createSelector(
  state => state.reducer, state => state.user);
