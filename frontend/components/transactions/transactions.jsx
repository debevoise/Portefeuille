import React, {Component} from 'react';
import TransactionsIndexContainer from './transactions_index_container';

export default class Transactions extends Component {
    render() {
        return (
            <section>
                <TransactionsIndexContainer/>
            </section>
        )
    }
}