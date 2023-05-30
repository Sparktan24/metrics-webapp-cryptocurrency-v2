//  import currencyReducer, { getCurrency } from '../../redux/currency/currencySlice';
//  import detailsReducer, { getDetails } from '../../redux/currency/detailSlice';
import coinsReducer, { getCoins } from '../redux/coins/coinsSlice';
import store from '../app/store';

describe('Redux Functionalities', () => {
  test('Configures the store correctly', () => {
    expect(store.getState()).toEqual({
      coins: coinsReducer(undefined, {}),
    });
  });
  test('Dispatches getCoins actions', async () => {
    const mockData = { coinsList: [], priceOrder: 'desc', rankOrder: 'desc' };
    /* Mocking the fetch function */
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    await store.dispatch(getCoins());
    const state = store.getState();

    expect(state.coins.coinsList).toBeDefined();
  });
});
