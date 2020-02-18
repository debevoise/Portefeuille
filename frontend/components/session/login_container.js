import { loginUser } from "../../actions/user_actions"
import { connect } from "react-redux"
import LoginForm from "./login"

const msp = () => ({})

const mdp = dispatch => {
    return {
        login: (user) => dispatch(loginUser(user))
    }
}

const LoginContainer = connect(msp, mdp)(LoginForm);
export default LoginContainer;