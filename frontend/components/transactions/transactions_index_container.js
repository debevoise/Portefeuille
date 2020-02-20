import { fetchTransactions } from "../../actions/transaction_actions"
import { connect } from "react-redux"
import TransactionsIndex from "./transactions_index"

const msp = ({transactions, stocks }) => {
    return { transactions: Object.values(transactions), stocks }
}

const mdp = dispatch => {
    return {
        fetchTransactions: () => dispatch(fetchTransactions())
    }
}

const TransactionsIndexContainer = connect(msp, mdp)(TransactionsIndex);
export default TransactionsIndexContainer;