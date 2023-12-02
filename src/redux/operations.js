import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6569f71cde53105b0dd7f2eb.mockapi.io/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addAdvert = createAsyncThunk(
  'adverts/addAdvert',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/adverts', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteAdvert = createAsyncThunk(
  'adverts/deleteAdvert',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/adverts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
