import React, {Component} from 'react';

export default class BuyStockForm extends Component {
    constructor(props) {
        super(props)

        this.defaultState = {
            loaded: false,
            ticker: "",
            errors: [],
            quantity: 0,
        }

        this.state = this.defaultState;

        this.search = this.search.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.updateTicker = this.updateTicker.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTicker() {
        return e => {
            this.setState({
                loaded: false,
                ticker: (e.currentTarget.value).toUpperCase()
            }); 
        }
    }

    updateQuantity() {
        return e => {
            this.setState({
                loaded: false,
                quantity: Math.floor(parseInt(e.currentTarget.value)) || 0
            });
        };
    }
    
    handleSubmit(e) {
        let {market} = this.props;
        let {ticker, quantity} = this.state;
        let price = market[ticker].latestPrice;
        let company = market[ticker].companyName;
		e.preventDefault();
        e.stopPropagation();
        this.props.buyStock(ticker, company, price, quantity)
            .then(() => this.setState(this.defaultState));
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

        if (!(loaded && ticker in market && quantity > 0)) {
          return buyShares;
        } 

        let price = market[ticker].latestPrice;
        let totalPrice = Math.ceil(price * quantity * 100) / 100;

        if (totalPrice > balance) {
            return (
                <div className='invalid'>
                    <button className='invalid-button'>Buy stock</button>
                    <p>Insufficient funds.</p>
                    <p>Total cost: ${totalPrice}</p>
                </div>
            )
        }

        return (
            <div className='confirmation'>
                <button 
                    className='confirm-button' 
                    onClick={this.handleSubmit}>Confirm</button>
                <p>Purchase {quantity} share{quantity === 1 ? "" : "s"} of {ticker} at ${price}/share?</p>
                <p>Total cost: ${totalPrice}</p>
            </div>
        )
    }

    render() {
        let { balance } = this.props;
        let { quantity, ticker } = this.state;
        return (
          <div className="buy-stock-container">
            <h1>Cash: ${Math.ceil(balance * 100) / 100}</h1>
            <div className='howto'>
                Search for stocks by symbol (e.g. 'AAPL') and pay with your cash balance.
            </div>
            <form className="buy-stock" onSubmit={e => e.preventDefault()}>
              <div className="field">
                <label htmlFor="user_email">Stock Ticker</label>
                <br />
                <input
                  type="text"
                  onChange={this.updateTicker()}
                  value={ticker}
                />
              </div>
              <div className="field">
                <label htmlFor="ticker">Quantity</label>
                <br />
                <input
                  type="text"
                  pattern="[0-9]*"
                  onChange={this.updateQuantity()}
                  value={quantity}
                />
              </div>
              {this.renderConfirmation()}
            </form>
          </div>
        );
    }
}