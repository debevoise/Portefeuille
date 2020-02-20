import { connect } from "react-redux";
import StocksIndex from "./stocks_index";
import { fetchUser } from "../../actions/user_actions";
import { fetchMarketInformation } from "../../actions/market_actions";



const msp = ({stocks, market}) => { 
    let stockInformation = Object.values(stocks).map(stock => {
        let {ticker} = stock;
        if (ticker in market) {
            stock.price = market[ticker].latestPrice;
            let prevPrice = market[ticker].previousClose;
            let gains = Math.ceil(10000 * (stock.price - prevPrice) / prevPrice) / 100 // Round to nearest hundreth %
            stock.gains = gains;
        }
        return stock;
    })

    return { stocks: stockInformation };
}

const mdp = dispatch => {
    return { 
        fetchStocks: () => dispatch(fetchUser()),
        fetchMarketInformation: tickerArr => dispatch(fetchMarketInformation(tickerArr))
     }
}

const StocksIndexContainer = connect(msp, mdp)(StocksIndex);
export default StocksIndexContainer;