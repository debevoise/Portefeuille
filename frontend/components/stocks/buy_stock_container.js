import { fetchStockInformation } from "../../actions/market_actions";
import BuyStockForm from "./buy_stock_form";
import { connect } from "react-redux";
import { buyStock } from "../../actions/transaction_actions";

const msp = state => ({
    errors: state.errors,
    market: state.market,
    balance: state.user.balance
});

const mdp = dispatch => ({
  fetchStockInformation: ticker => dispatch(fetchStockInformation(ticker)),
  buyStock: (ticker, company, unit_price, quantity) =>
    dispatch(buyStock(ticker, company, unit_price, quantity))
});

const BuyStockContainer = connect(msp, mdp)(BuyStockForm);
export default BuyStockContainer;