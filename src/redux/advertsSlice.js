import { createSlice } from '@reduxjs/toolkit';
import { advertsInitialState } from './initialState';
import { fetchAdverts, addAdvert, deleteAdvert } from 'redux/operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(addAdvert.pending, handlePending)
      .addCase(addAdvert.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addAdvert.rejected, handleRejected)
      .addCase(deleteAdvert.pending, handlePending)
      .addCase(deleteAdvert.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (advert) => advert.id === payload.id,
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteAdvert.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
