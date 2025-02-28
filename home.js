import React from 'react';
import './home.css'; // Import the CSS file for styling

class Home extends React.Component {
  render() {
    return (
      <>
        {/* Meta tags and title */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alumni Association</title>

        {/* Header with Navbar */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue">
            <div className="container-fluid">
              {/* Logo */}
              <a className="navbar-brand" href="#">
                <img src="./logo_alumni.jpg" alt="Logo" className="logo" />
              </a>

              {/* Collapse Button */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar Links */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Membership
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Connections
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/login">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Information
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                </ul>

                {/* Search Bar */}
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          {/* Sliding Bars in Header */}
          <div className="sliding-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <section id="hero">
            <h2>Connecting Educators, Inspiring Futures</h2>
            <p>Join our community of passionate teachers and alumni.</p>
            <a href="membership.html" className="cta-button">
              Join Now
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer>
          <p>© 2025 Alumni Association</p>
        </footer>
      </>
    );
  }
}

export default Home;