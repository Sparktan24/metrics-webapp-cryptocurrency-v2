/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCoin } from '../redux/coins/coinsSlice';
import rightArrow from '../styles/arrow_circle_right.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const { coinsList } = useSelector((store) => store.coins);
  const [searchCoin, setSearchCoin] = useState('');

  if (coinsList.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  const filterCoins = coinsList.filter((coin) => {
    if (coin.name.toLowerCase().includes(searchCoin.toLocaleLowerCase())) {
      return coin;
    }
    return null;
  });

  const result = () => {
    if (filterCoins.length === 0) {
      return <div className="not-found">No matches were found</div>;
    }
    return (
      <ul className="grid-container">
        {filterCoins.map((coin) => (
          <li key={coin.id} className="li-home-page">
            <img className="right-arrow" src={rightArrow} alt="arrow pointing to right" />
            <NavLink
              to="/CoinsDetail"
              onClick={() => dispatch(filterCoin(coin.id))}
            >
              <img className="coin-logo" src={coin.icon} alt="coin logo" />
              Rank:
              {coin.rank}
              <br />
              <span className="home-coin-name">
                {coin.name}
              </span>
              Price:
              $
              {parseFloat(coin.price).toFixed(2)}
              usd
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchCoin(e.target.value)}
          placeholder="Search for a cryptocurrency"
          value={searchCoin}
        />
      </div>
      {result()}

      <div className="home-page-wrapper">
        <main>
          <ul className="grid-container">
            {coinsList.map((coin) => (
              <li key={coin.id} className="li-home-page">
                <img className="right-arrow" src={rightArrow} alt="arrow pointing to right" />
                <NavLink
                  to="/CoinsDetail"
                  onClick={() => dispatch(filterCoin(coin.id))}
                >
                  <img className="coin-logo" src={coin.icon} alt="coin logo" />
                  Rank:
                  {coin.rank}
                  <br />
                  <span className="home-coin-name">
                    {coin.name}
                  </span>
                  Price:
                  $
                  {parseFloat(coin.price).toFixed(2)}
                  usd
                </NavLink>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
};

export default HomePage;
