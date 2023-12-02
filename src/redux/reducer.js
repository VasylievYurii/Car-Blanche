import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { filterReducer } from './filterSlice';

export const reducer = combineReducers({
  adverts: advertsReducer,
  filter: filterReducer,
});
