import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinstats.app/public/v1/coins';

const initialState = {
  coinsList: [],
  rankOrder: 'desc',
  priceOrder: 'desc',
};

export const getCoins = createAsyncThunk(
  'coins/getCoins',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios(url);
      //  console.log(resp.data);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    filterCoin: (state, { payload }) => {
      //  console.log(payload);
      const id = payload;
      const newState = state.coinsList.coins.map((coin) => {
        if (coin.id === id) return { ...coin, display: true };
        return coin;
      });
      return { ...state, coinsList: newState };
    },
    resetCoins: (state) => {
      const newState = state.coinsList.map((coin) => ({
        ...coin,
        display: false,
      }));
      return { ...state, coinsList: newState };
    },
    sortByRank: (state) => {
      let sortedCoins;
      if (state.rankOrder === 'desc') {
        sortedCoins = state.coinsList.slice().sort((a, b) => a.rank - b.rank);
        return { ...state, coinsList: sortedCoins, rankOrder: 'asc' };
      }
      sortedCoins = state.coinsList.slice().sort((a, b) => b.rank - a.rank);
      return { ...state, coinsList: sortedCoins, rankOrder: 'desc' };
    },
    sortByPrice: (state) => {
      let sortedCoins;
      if (state.priceOrder === 'desc') {
        sortedCoins = state.coinsList
          .slice()
          .sort((a, b) => a.priceUsd - b.priceUsd);
        return { ...state, coinsList: sortedCoins, priceOrder: 'asc' };
      }
      sortedCoins = state.coinsList
        .slice()
        .sort((a, b) => b.priceUsd - a.priceUsd);
      return { ...state, coinsList: sortedCoins, priceOrder: 'desc' };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state, action) => {
      //  console.log(action.payload.data);
      const newState = { ...state, coinsList: action.payload };
      //  const test = state.coinsList;
      //  console.log(test);
      return newState;
    });
  },
});

export default coinsSlice.reducer;

export const {
  filterCoin,
  resetCoins,
  sortByRank,
  sortByPrice,
} = coinsSlice.actions;
