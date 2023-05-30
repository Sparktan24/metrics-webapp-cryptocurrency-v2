/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCoin } from '../redux/coins/coinsSlice';
import rightArrow from '../styles/arrow_circle_right.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const { coinsList } = useSelector((store) => store.coins);
  const { coins } = coinsList;
  //  console.log(coinsList.coins);

  if (coinsList.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <main>
        <ul>
          {coins.map((coin) => (
            <li key={coin.id} className="li-home-page">
              <img className="right-arrow" src={rightArrow} alt="arrow pointing to right" />
              <NavLink
                to="/CoinsDetail"
                onClick={() => dispatch(filterCoin(coin.id))}
              >
                Rank:
                {coin.rank}
                <br />
                <span className="home-coin-name">
                  {coin.name}
                </span>
                <br />
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
  );
};

export default HomePage;
