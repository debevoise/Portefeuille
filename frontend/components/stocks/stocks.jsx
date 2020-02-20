import React, { Component } from "react";
import BuyStockContainer from "./buy_stock_container";
import StocksIndexContainer from "./stocks_index_container";

export default class Stocks extends Component {
  render() {
    return <section className='stock-container'>
        <StocksIndexContainer />
        <BuyStockContainer />
      </section>;
  }
}
