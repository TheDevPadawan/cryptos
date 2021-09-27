function Crypto({ currency }) {
  return (
    <>
      {currency && (
        <div className="crypto-box">
          <img src={currency.image.large} alt="crypto img" />
          <h2>{currency.name}</h2>
          <h1>{currency.market_data.current_price.eur}</h1>
        </div>
      )}
    </>
  );
}

export default Crypto;
