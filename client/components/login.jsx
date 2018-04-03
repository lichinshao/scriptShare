import React from 'react';
import ReactDom from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleSubmit() {
    console.log('in submit')
    this.props.changeView('createSnippet');
  }

  handleRegisterClick() {
    console.log('in register click')

  }

  render() {
    return(
      <div>
        <div>Welcome to Script-Share!
        </div>
        <div>Please log in to continue!
        </div>
        <div>
          <div>
          Username:
          <input type="text" name="username" />
          </div>
          <div>
          Password:
          <input type="text" name="username" />
          </div>
          <div>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          <button type="submit" onClick={this.handleRegisterClick}>Sign Up!</button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {

}

export default Login;