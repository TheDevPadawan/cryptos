import axios from "axios";

function Nav({ setCurrency }) {
  const handleCLick = (cryptoName) => {
    console.log("event -->", cryptoName);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then((response) => setCurrency(response.data));
  };

  return (
    <div className="nav-container">
      <button onClick={() => handleCLick("bitcoin")}>BTC</button>
      <button onClick={() => handleCLick("ethereum")}>ETH</button>
      <button onClick={() => handleCLick("ripple")}>XRP</button>
      <button onClick={() => handleCLick("dogecoin")}>DOGE</button>
    </div>
  );
}

export default Nav;
