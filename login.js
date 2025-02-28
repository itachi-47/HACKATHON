import React from 'react';

class Login extends React.Component {
    state = {  } 
    render() { 
        return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page - Glassmorphism Design</title>
  <link rel="stylesheet" href="style1.css" />
  {/* Font Awesome for Icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div className="background">
    <div className="glass-container">
      <h1>LOGIN</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email or username</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email or username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="divider">OR</div>
      <div className="social-login">
        <button className="social-button google">
          <i className="fab fa-google" /> Google
        </button>
        <button className="social-button facebook">
          <i className="fab fa-facebook-f" /> Facebook
        </button>
      </div>
    </div>
  </div>
  {/* JavaScript */}
</>
        );
    }
}
 
export default Login;