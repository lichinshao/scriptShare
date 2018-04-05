import React from 'react';
import ReactDom from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      regUsername: '',
      regPassword:'',
      regPassword2: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleTextChange(e, field) {
    this.setState({[field]: e.target.value})
  }
  handleSubmit() {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user);
  }

  handleRegisterClick() {

  }

  render() {
    return(
      <div className="container">
        <div className="welcome">Welcome to Script-Share!
        </div>
        <div className="col-sm-12">
          <div className="col-sm-5" style={styles.textContainer}>
            <div>Log In</div>
            <div>
            Username:
            <input type="text" name="username" onChange={e => this.handleTextChange(e, 'username')}/>
            </div>
            <div>
            Password:
            <input type="password" name="password" onChange={e => this.handleTextChange(e, 'password')}/>
            </div>
            <div>
            <button type="submit" style={styles.button} onClick={this.handleSubmit}>Log me in!</button>
            </div>
          </div>
          <div className="col-sm-2" style={styles.textContainer}>
            <p>- - - OR - - - </p>
          </div>
          <div className="col-sm-5" style={styles.textContainer}>
            <div>Register to continue</div>
            <div>Choose a username:
              <input type="text" onChange={e => this.handleTextChange(e, 'regUsername')}/>
            </div>
            <div>Choose a password:
              <input type="password" onChange={e => this.handleTextChange(e, 'regPassword')}/>
            </div>
            <div>Confirm Password:
              <input type="password" onChange={e => this.handleTextChange(e, 'regPassword2')}/>
            </div>
            <div>
            <button type="submit" style={styles.button} onClick={this.handleRegisterClick}>Sign me up!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  textContainer: {
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: '20px'
  },
  button: {
    backgroundColor: 'lightblue'
  }
}

export default Login;