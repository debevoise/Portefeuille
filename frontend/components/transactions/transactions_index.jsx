import React, {Component} from 'react';

export default class TransactionsIndex extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
    }

    render() {
        let {transactions, stocks} = this.props;
        if (!stocks || !transactions) {
            return (
              <div className="transactions-container">
                <h1>Your portfolio</h1>
                <div className="loading">Loading...</div>
              </div>
            );
        }

        let transactionList = transactions.map(trans => {
            let { unit_price, quantity, stock_id } = trans;
            let { company, ticker } = stocks[stock_id];

            return (
              <tr className="transaction-row" key={trans.id}>
                <th>{ticker}</th>
                <th>{company}</th>
                <th>{quantity}</th>
                <th>${unit_price}</th>
              </tr>
            );
        })

        return (
          <div className="transactions-container">
            <h1>Transaction Ledger</h1>

            <table className="transaction-list">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Company</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{transactionList}</tbody>
            </table>
          </div>
        );
    }
}