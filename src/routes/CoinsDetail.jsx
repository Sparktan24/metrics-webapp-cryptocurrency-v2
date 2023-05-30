/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CoinsDetail = () => {
  const { coinsList } = useSelector((store) => store.coins);
  const activeCoin = coinsList.filter((coin) => coin.display);
  const coin = activeCoin[0];
  //  return console.log(activeCoin);

  if (!coin) {
    // If there is no active coin, redirect to the homepage
    return <Navigate to="/HomePage" />;
  }

  const handleFormatNumber = (num) => {
    return (parseFloat(num).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="details-container">
      <table className="details-table">
        <tbody className="details-table-body">
          <tr>
            <td className="name-format">
              Name:
              &nbsp;
              <span className="details-coin-name">{coin.name}</span>
              <span className="to-right">{coin.symbol}</span>
            </td>
          </tr>
          <tr>
            <td>
              Current Price: &nbsp;$
              {coin.price}
              &nbsp;
              {handleFormatNumber(coin.priceChange1d)}
              % last 24Hrs
            </td>
          </tr>
          <tr>
            <td>
              Rank:
              &nbsp;
              {coin.rank}
            </td>
          </tr>
          <tr>
            <td>
              Market cap: &nbsp;$
              {handleFormatNumber(coin.marketCap)}
            </td>
          </tr>
          <tr>
            <td>
              Available Supply: &nbsp;$
              {handleFormatNumber(coin.availableSupply)}
              {/* {(parseFloat(coin.supply).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            </td>
          </tr>
          <tr>
            <td>
              Max supply: &nbsp;$
              {handleFormatNumber(coin.totalSupply)}
            </td>
          </tr>
          <tr>
            <td>
              Website: &nbsp;
              {coin.websiteUrl}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoinsDetail;
