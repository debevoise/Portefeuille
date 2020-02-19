import React, { Component } from "react";
import BuyStockContainer from "./buy_stock_container";

export default class Stocks extends Component {
  render() {
    return <section className='stock-container'>
      Hello from Stocks
        <BuyStockContainer />
      </section>;
  }
}
