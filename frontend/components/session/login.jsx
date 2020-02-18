import React, {Component} from 'react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        debugger
        this.state = { email: "", password: ""};
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 
        }
    }
    
    handleSubmit(e) {
		e.preventDefault();
        e.stopPropagation();
        this.props.signup
    }
    
    render() {
        const { password, email } = this.state;

        return (
            <main className="registration-container">
                <section className="registration">
                    <h2>Log in</h2>

                    <form className="new_user" acceptCharset="UTF-8" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label htmlFor="user_email">Email</label><br/>
                            <input 
                                autoFocus="autoFocus" 
                                autoComplete="email" 
                                type="email"
                                onChange={this.update('email')} 
                                value={email} 
                                name="user[email]" 
                                id="user_email"/>
                        </div>

                        <div className="field">
                            <label htmlFor="user_password">Password</label><br/>
                            <input 
                                autoComplete="current-password" 
                                type="password" 
                                onChange={this.update('password')}
                                value={password} 
                                name="user[password]" 
                                id="user_password"/>
                        </div>

                        <button>
                            Log in
                        </button>
                    </form>

                </section>
            </main>
        )
    }

}