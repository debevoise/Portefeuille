import { signupUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import SignupForm from "./signup";

const msp = state => ({ loggedIn: !!state.user, errors: state.errors });

const mdp = dispatch => ({
    signup: user => dispatch(signupUser(user))
});

const SignupContainer = connect(msp, mdp)(SignupForm);
export default SignupContainer;
