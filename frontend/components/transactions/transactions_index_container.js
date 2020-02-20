import { fetchTransactions } from "../../actions/transaction_actions"
import { connect } from "react-redux"
import TransactionsIndex from "./transactions_index"

const msp = ({transactions, stocks, user}) => {
    return { 
        transactions: Object.values(transactions), 
        stocks,
        balance: Math.ceil(user.balance * 100) / 100
    }
}

const mdp = dispatch => {
    return {
        fetchTransactions: () => dispatch(fetchTransactions())
    }
}

const TransactionsIndexContainer = connect(msp, mdp)(TransactionsIndex);
export default TransactionsIndexContainer;