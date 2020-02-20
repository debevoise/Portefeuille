import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
  <main className="splash-container">
    <section className="splash">
      <h1>Portefeuille</h1>
      <h2>Your stocks. Organized.</h2>
      <p>
        A fullstack app completed for NYC Tech Talent Pipeline's coding
        challenge. Portefeuille is hosted on Heroku and uses Ruby on Rails on
        the backend, Devise for user authentication, as well as React and Redux
        for frontend management. Realtime stock market data provided by{" "}
        <a href="https://iexcloud.io">IEX Cloud</a>.
      </p>
      <p className='madeby'>
        Developed by{" "}
        <a
          href="https://www.simondebevoise.com/"
          target="_blank"
          rel="noopener"
        >
          Simon DeBevoise
        </a>
        . Check out Portefeuille{" "}
        <a
          href="https://www.github.com/debevoise/Portefeuille"
          target="_blank"
          rel="noopener"
        >
          on Github
        </a>
        .
      </p>
      <div className="nav-container">
        <nav>
          <Link to="/login">Log in</Link>
          <div className="divider">-or-</div>
          <Link to="/signup">Sign up</Link>
        </nav>
      </div>
    </section>
  </main>
);

export default Splash;