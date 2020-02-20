import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: ""};
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
    
    handleSubmit(e) {
		e.preventDefault();
        e.stopPropagation();
        this.props.login(this.state)
    }

    renderErrors() {
        let errorsList = this.props.errors.map((err, idx) => {
            return <li key={idx}>{err}</li>
        })
        return <ul className='errors-list'>{errorsList}</ul>
    }
    
    render() {
        const { password, email } = this.state;

        return (
          <main className="registration-container">
            <section className="registration">
              <h1>Log in</h1>
              {this.renderErrors()}
              <form
                className="new_user"
                acceptCharset="UTF-8"
                onSubmit={this.handleSubmit}
              >
                <div className="field">
                  <label htmlFor="user_email">Email</label>
                  <br />
                  <input
                    autoFocus="autoFocus"
                    autoComplete="email"
                    type="email"
                    onChange={this.update("email")}
                    value={email}
                    name="user[email]"
                    id="user_email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="user_password">Password</label>
                  <br />
                  <input
                    autoComplete="current-password"
                    type="password"
                    onChange={this.update("password")}
                    value={password}
                    name="user[password]"
                    id="user_password"
                  />
                </div>

                <button className="submit">Log in</button>
                <Link className="instead" to="/signup">
                  Sign up instead
                </Link>
              </form>
            </section>
          </main>
        );
    }

}