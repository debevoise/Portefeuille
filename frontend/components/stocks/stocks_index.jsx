import React, {Component} from 'react';

export default class StocksIndex extends Component {
    componentDidMount() {
        this.props.fetchStocks();
    }

      renderEmpty() {
        return (
          <div className="stocks-index-container empty-container">
            <h1>Your portfolio</h1>
            <div className="empty">
              <p>You don't own any stocks yet.</p>
              <p>Look up and purchase stocks to the right.</p>
              <p className='arrow'>
                &#8594;
              </p>
            </div>
          </div>
        );
    }
    
    render() {
        let {stocks} = this.props;

        if (!stocks) return (
            <div className="stocks-index-container">
                <h1>Your portfolio</h1>
                <div className='loading'>Loading...</div>
            </div>
        )
        if (stocks.length === 0) {
          return this.renderEmpty();
        }
        let totalValue = 0;

        let hasMarketPrice = true;
        let stockList = stocks.map((stock) => {
            let {ticker, company, quantity, price, gains} = stock;

            if (!('price' in stock)) {
              hasMarketPrice = false
            } else {
              totalValue += quantity * price;
            }

            let formattedGains;
            let gainsClass = 'neutral';
            if (typeof gains === 'undefined') {
                formattedGains = '...'
            } else {
                
                formattedGains = gains < 0 ? '-%' + Math.abs(gains) : ' %' + gains;
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
                  <th>Shares</th>
                  <th>Price</th>
                  <th>Gains*</th>
                </tr>
              </thead>
              <tbody>{stockList}</tbody>
            </table>
            <footer>Total market value: ${totalValue}</footer>
          </div>
        );
    }
}