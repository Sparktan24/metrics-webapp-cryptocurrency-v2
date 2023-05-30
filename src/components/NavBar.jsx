/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCoins } from '../redux/coins/coinsSlice';
import backArrow from '../styles/back_arrow.png';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="nav-bar">
      <div className="nav-div">
        <NavLink to="/HomePage" onClick={() => dispatch(resetCoins())}>
          <img src={backArrow} className="backArrow" alt="back arrow" />
        </NavLink>
        {/* <NavLink to="/CoinsDetail">CoinDetails</NavLink> */}
      </div>
      <span className="nav-bar-title">Top Cryptocurrencies</span>
    </nav>
  );
};

export default NavBar;
