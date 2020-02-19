import { fetchStockInformation } from "../../actions/market_actions";
import BuyStockForm from "./buy_stock_form";
import { connect } from "react-redux";

const msp = state => ({
    market: state.market,
    balance: state.user.balance
});

const mdp = dispatch => ({
    fetchStockInformation: ticker => dispatch(fetchStockInformation(ticker))
})

const BuyStockContainer = connect(msp, mdp)(BuyStockForm);
export default BuyStockContainer;