export const RECEIVE_STOCK_INFORMATION = "RECEIVE_STOCK_INFORMATION";
export const RECEIVE_PORTFOLIO_INFORMATION = "RECEIVE_PORTFOLIO_INFORMATION";
import * as MarketApi from '../util/market_api_util';
import { receiveErrors } from './error_actions';

export const receiveStockInformation = data => ({
    type: RECEIVE_STOCK_INFORMATION,
    data
})

export const receivePortfolioInformation = data => ({
    type: RECEIVE_PORTFOLIO_INFORMATION,
    data
});

export const fetchStockInformation = ticker => dispatch => {
    return MarketApi.fetchStockInfo(ticker).then(
        data => dispatch(receiveStockInformation(data)),
        errors => dispatch(receiveErrors([errors.responseText]))
    )
}

export const fetchMarketInformation = tickerArray => dispatch => {
  return MarketApi.fetchMarketInfo(tickerArray).then(
    data => dispatch(receivePortfolioInformation(data)),
    errors => dispatch(receiveErrors([errors.responseText]))
  );
};