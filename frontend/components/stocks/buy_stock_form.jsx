import React, {Component} from 'react';

export default class BuyStockForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            ticker: "",
            errors: [],
            quantity: 0,
        }

        this.search = this.search.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.updateTicker = this.updateTicker.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTicker() {
        return e => {
            this.setState({
                ticker: (e.currentTarget.value).toUpperCase(),
                loaded: false
            }); 
        }
    }

    updateQuantity() {
        return e => {
            this.setState({
                quantity: Math.floor(parseInt(e.currentTarget.value)) || 0
            });
        };
    }
    
    handleSubmit(e) {
		e.preventDefault();
        e.stopPropagation();
        // this.props.login(this.state)
    }

    search() {
        let {ticker} = this.state;
        if (ticker.length === 0) return;
        ticker = ticker.toUpperCase();
        this.props.fetchStockInformation(ticker)
            .then(() => this.setState({ ticker, loaded: true }))
    }

    renderConfirmation() {
        let {ticker, loaded, quantity} = this.state;
        let {market, balance} = this.props;
        let buyShares = <button onClick={this.search}>Buy shares</button>

        if (quantity <= 0) return buyShares;

        if (!loaded && ticker in market) {
            return buyShares;
        } else if (!loaded) {
            return buyShares;
        }

        let price = market[ticker].latestPrice;
        let totalPrice = Math.ceil(price * quantity * 100) / 100;

        return (
            <div className='confirmation'>
                <p>Confirm purchase {quantity} shares of {ticker} at {price}/share?</p>
                <p>Total cost: ${totalPrice}</p>
                <button className='confirm-button'>Confirm</button>
            </div>
        )
    }

    render() {
        let { balance } = this.props;
        let { quantity, ticker } = this.state;
        return (
          <div className="buy-stock-container">
            <h2>Cash: ${balance}</h2>
            <div className="field">
              <label htmlFor="ticker">Quantity</label>
              <br />
              <input
                type="number"
                onChange={this.updateQuantity()}
                value={quantity}
              />
            </div>
            <div className="field">
              <label htmlFor="user_email">Stock Ticker</label>
              <br />
              <input
                type="text"
                onChange={this.updateTicker()}
                value={ticker}
              />
            </div>
            {this.renderConfirmation()}
          </div>
        );
    }
}