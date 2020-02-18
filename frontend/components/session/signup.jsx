import React, {Component} from 'react';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "", password_confirmation: ""};
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 
        }
	}
    
    render() {
        let {email, password_confirmation, password} = this.state;

        return (
            <main className="registration-container">
                <section className="registration">
                    <h2>Sign up</h2>

                    <form className="new_user" id="new_user" action="/signup" acceptCharset="UTF-8" method="post">
                        <div className="field">
                            <label htmlFor="user_email">Email</label><br/>
                            <input 
                                onChange={this.update('email')}
                                value={email}
                                autoFocus="autoFocus" 
                                autoComplete="email" 
                                type="email"
                                name="user[email]" 
                                id="user_email"/>
                        </div>

                        <div className="field">
                            <label htmlFor="user_password">Password</label>
                            <em>(6 characters minimum)</em>
                            <br/>
                            <input 
                                onChange={this.update('password')}
                                value={password}
                                autoComplete="new-password" 
                                type="password" 
                                name="user[password]" 
                                id="user_password"/>
                        </div>

                        <div className="field">
                            <label htmlFor="user_password_confirmation">Password confirmation</label><br/>
                            <input 
                                onChange={this.update('password_confirmation')}
                                value={password_confirmation}
                                autoComplete="new-password" 
                                type="password"
                                name="user[password_confirmation]" 
                                id="user_password_confirmation"/>
                        </div>

                        <button>
                            Sign up
                        </button>
                    </form>  
                    
                    <a href="/login">Log in instead</a><br/>
                </section>
            </main>
        )
    }
}