import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoriteSlice';

export const reducer = combineReducers({
  adverts: advertsReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
});
