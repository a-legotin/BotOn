import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="section m-0 p-0">
        <div className="container">
          <div className="columns">
            <div className="column is-9 is-offset-1">
              <nav
                aria-label="main navigation"
                className="navbar mt-5 mb-5"
                role="navigation"
              >
                <div className="navbar-brand">
                  <a className="navbar-item has-text-weight-bold" href="/">
                    <img src="/logo_nav.png" alt="logo-nav" />
                  </a>
                </div>
                <div className="navbar-menu" id="navbar">
                  <div className="navbar-end">
                    <div className="navbar-item">
                      <div className="buttons">
                        <a
                          className="button is-dark has-text-weight-bold"
                          href="/users/sign_up"
                        >
                          Sign up
                        </a>
                        <a
                          className="button is-light has-text-weight-bold"
                          href="/users/sign_in"
                        >
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="main-content section m-0 p-0">
        <div className="container">
          <div className="columns">
            <div className="column is-9 is-offset-1">
              <div className="hero is-medium">
                <div className="hero-body pb-6 pt-6">
                  <div className="columns is-vcentered">
                    <div className="column is-6">
                      <h1 className="is-size-1 title mb-6 has-text-weight-bold">
                        Your automated crypto-trading journey begins here.
                      </h1>
                      <p className="subtitle is-size-4">
                        <strong>BotOn</strong> is the open-source platform to create and run your own trading strategies with the number of crypto exchanges.
                      </p>
                      <div className="buttons">
                        <a
                          className="button is-medium is-link"
                          href="/users/sign_up"
                        >
                          Login to dashboard
                        </a>
                      </div>
                    
                    </div>
                    <div className="column is-6 is-hidden-mobile"><figure className="image is-square">
  <img alt="logo_colored" src="/logo_colored.png" />
</figure></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section m-0 p-0">
        <div className="container">
          <div className="columns">
            <div className="column is-9 is-offset-1">
              <footer className="footer has-background-white">
                <nav className="level">
                  <div className="level-left">
                    <small className="level-item">
                      <a className="has-text-dark" href="/">
                        BotOn
                      </a>
                    </small>
                    <small className="level-item">© {new Date().getFullYear()}</small>
                  </div>
                  <div className="level-right">
                    <small className="level-item">
                      <a className="has-text-dark" href="https://github.com/a-legotin/BotOn">
                        Source
                      </a>
                    </small>           
                  </div>
                </nav>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
