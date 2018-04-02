import React from 'react';
import ReactDom from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>Welcome to Script-Share!
        </div>
        <div>Please log in to continue!
        </div>
        <form>
          <label>
          Username:
          <input type="text" name="username" />
          </label>
          <label>
          Password:
          <input type="text" name="username" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;