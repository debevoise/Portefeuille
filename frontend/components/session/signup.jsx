import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", password: "", password_confirmation: ""};
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 
        }
    }

    renderErrors() {
        let errorsList = this.props.errors.map((err, idx) => {
            return <li key={idx}>{err}</li>
        })
        return <ul className='errors-list'>{errorsList}</ul>
    }
    
    handleSubmit(e) {
		e.preventDefault();
        e.stopPropagation();
        this.props.signup(this.state);
    }
    
    render() {
        let {email, password_confirmation, password} = this.state;

        return (
          <main className="registration-container">
            <section className="registration">
              <h1>Sign up</h1>
              {this.renderErrors()}
              <form
                className="new_user"
                id="new_user"
                onSubmit={this.handleSubmit}
              >
                <div className="field">
                  <label htmlFor="user_email">Email</label>
                  <br />
                  <input
                    onChange={this.update("email")}
                    value={email}
                    autoFocus="autoFocus"
                    autoComplete="email"
                    type="email"
                    name="user[email]"
                    id="user_email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="user_password">Password</label>
                  <em>(6 characters minimum)</em>
                  <br />
                  <input
                    onChange={this.update("password")}
                    value={password}
                    autoComplete="new-password"
                    type="password"
                    name="user[password]"
                    id="user_password"
                  />
                </div>

                <div className="field">
                  <label htmlFor="user_password_confirmation">
                    Password confirmation
                  </label>
                  <br />
                  <input
                    onChange={this.update("password_confirmation")}
                    value={password_confirmation}
                    autoComplete="new-password"
                    type="password"
                    name="user[password_confirmation]"
                    id="user_password_confirmation"
                  />
                </div>

                <button className="submit">Sign up</button>
                <Link className="instead" to="/login">
                  Log in instead
                </Link>
              </form>

              <br />
            </section>
          </main>
        );
    }
}