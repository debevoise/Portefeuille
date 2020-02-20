import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class TransactionsIndex extends Component {

    componentDidMount() {
        this.props.fetchTransactions();
    }

    renderEmpty() {
        return (
          <div className="transactions-container empty-container">
            <h1>Transaction Ledger</h1>
            <div className="empty">
              <p>No transactions yet...</p>
              <p>
                You can <Link to="/stocks">purchase stocks here</Link>.
              </p>
            </div>
          </div>
        );
    }

    render() {
        let {transactions, stocks, balance} = this.props;
        if (!stocks || !transactions) {
            return (
              <div className="transactions-container">
                <h1>Transaction Ledger</h1>
                <div className="loading">Loading...</div>
              </div>
            );
        }

        if (Object.keys(transactions).length === 0) return this.renderEmpty();

        const formatDate = (dateString) => {
            let removedTime = dateString.split('T').shift();
            let timeArr = removedTime.split('-');
            timeArr.push(timeArr.shift())
            return timeArr.join('/');
        }

        let transactionList = transactions.map(trans => {
            let { unit_price, quantity, stock_id, date } = trans;
            let { company, ticker } = stocks[stock_id];

            return (
              <tr className="transaction-row" key={trans.id}>
                <th>{ticker}</th>
                <th>{company}</th>
                <th>{quantity} share{quantity === 1 ? '' : 's'}</th>
                <th>${unit_price}</th>
                <th>{formatDate(date)}</th>
              </tr>
            );
        })

        return (
          <section className="transactions-container">
            <h1>Transaction Ledger</h1>

            <table className="transaction-list">
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Company</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>{transactionList}</tbody>
            </table>
            <footer>
              Remaining balance: ${balance}
            </footer>
          </section>
        );
    }
}