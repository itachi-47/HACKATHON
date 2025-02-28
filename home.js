import React from 'react';
import './home.css'; // Corrected import statement

class Home extends React.Component {
  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alumni Association for Teachers</title>
        <link rel="stylesheet" href="styles.css" />
        <header>
          <h1>Welcome to the Teachers Alumni Association</h1>
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li>
                <a href="membership.html">Membership</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li><a  href="info.html:"> Information</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="hero">
            <h2>Connecting Educators, Inspiring Futures</h2>
            <p>Join our community of passionate teachers and alumni.</p>
            <a href="membership.html" className="cta-button">
              Join Now
            </a>
          </section>
        </main>
        <footer>
          <p>© 2023 Teachers Alumni Association</p>
        </footer>
      </>
    );
  }
}

export default Home;