import React, { useState, useEffect } from "react";
import axios from "axios";

//import styles
import "./styles/app.scss";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Crypto from "./components/Crypto";

function App() {
  const [currency, setCurrency] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/dogecoin?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
      )
      .then((response) => setCurrency(response.data));
  }, []);

  return (
    <div style={styles.container}>
      <Title />
      <Nav setCurrency={setCurrency} />
      <Crypto currency={currency} setCurrency={setCurrency} />
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/trading-bg.png"
    })`,
    backgroundColor: "rgba(6, 0, 0, 0.70)",
    backgroundBlendMode: "overlay",
    minHeight: "100vh",
    display: "Flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default App;
