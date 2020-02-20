import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>
      * Data provided by{" "}
      <a target="_blank" rel="noreferrer noopener" href="https://iexcloud.io">
        IEX Cloud
      </a>
      . Gains are calculated on % difference between a stock's current
      market price and its price at the previous market close. 
      {/* IEX's
      market api limits access to day-of market information for{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://intercom.help/iexcloud/en/articles/3210401-how-do-i-get-nasdaq-listed-stock-data-utp-data-on-iex-cloud"
      >
        NASDAQ listed stocks
      </a>
      . */}
    </p>
    <p>
      Portefeuille is a project by{" "}
      <a href="https://www.simondebevoise.com/" target="_blank" rel="noopener">
        Simon DeBevoise
      </a>
      . See it{" "}
      <a
        href="https://www.github.com/debevoise/Portefeuille"
        target="_blank"
        rel="noopener"
      >
        on Github
      </a>
      .
    </p>
  </footer>
);

export default Footer;