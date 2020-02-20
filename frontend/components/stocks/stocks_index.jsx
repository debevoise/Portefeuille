import React, {Component} from 'react';

export default class StocksIndex extends Component {
    componentDidMount() {
        this.props.fetchStocks();
    }
    
    render() {
        let {stocks} = this.props;

        if (!stocks) return (
            <div className="stocks-index-container">
                <h1>Your portfolio</h1>
                <div className='loading'>Loading...</div>
            </div>
        )

        let hasMarketPrice = true;
        let stockList = stocks.map((stock) => {
            let {ticker, company, quantity, price, gains} = stock;
            if (!('price' in stock)) hasMarketPrice = false;
            let formattedGains;
            let gainsClass = 'neutral';
            if (typeof gains === 'undefined') {
                formattedGains = '...'
            } else {
                formattedGains = gains < 0 ? '-%' + gains : '%' + gains
                if (gains < 0) gainsClass = 'loss';
                if (gains > 0) gainsClass = 'gain';
            }

            return (
              <tr className="stock-row" key={stock.id}>
                <th>{ticker}</th>
                <th>{company}</th>
                <th>{quantity}</th>
                <th>${price || '...'}</th>
                <th className={gainsClass}>{formattedGains}</th>
              </tr>
            );
        })

        if (!hasMarketPrice) {
            let tickerArr = this.props.stocks.map(stock => stock.ticker);
            if (tickerArr.length > 0)
              this.props.fetchMarketInformation(tickerArr);
        }

        return (
          <div className="stocks-index-container">
            <h1>Your portfolio</h1>

            <table className="stock-list">
              <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Company</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Gains</th>
                </tr>
              </thead>
              <tbody>
                {stockList}
              </tbody>
            </table>
          </div>
        );
    }
}