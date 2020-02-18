const msp = () => ({})

const mdp = dispatch => {
    return {
        login: user => dispatch(loginUser(user))
    }
}