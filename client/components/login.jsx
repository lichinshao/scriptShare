import React from 'react';
import ReactDom from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      regUsername: '',
      regPassword:'',
      regPassword2: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleTextChange(e, field) {
    e.preventDefault();
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
    this.confirmPwdMatch();
  }

  confirmPwdMatch() {
    let pwd1 = this.state.regPassword;
    let pwd2 = this.state.regPassword2;
    let username = this.state.regUsername;
    if (username.length < 4) {
      alert('your username must be at least 4 characters!');
      return;
    }
    if (pwd1 === pwd2 && pwd1 !== '') {
      let newUser = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.regUsername,
        password: this.state.regPassword
      }
      this.props.registerUser(newUser);
    } else {
      alert('Oh no! Your passwords don\'t match!');
    }

  }

  render() {
    return(
      <div className="container">
        <div className="welcome">Welcome to Script-Share!
        </div>
        <div className="col-12">
          <div className="col-5" style={styles.textContainer}>
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
          <div className="col-2" style={styles.textContainer}>
            <p>- - - OR - - - </p>
          </div>
          <div className="col-5" style={styles.textContainer}>
            <form style={styles.form}>
              <div>Register to continue</div>
              <div>First name:
                <input type="text" onChange={e => this.handleTextChange(e, 'firstname')}/>
              </div>
              <div>Last name:
                <input type="text" onChange={e => this.handleTextChange(e, 'lastname')}/>
              </div>
              <div>Choose a username:
                <input type="text" placeholder="must be at least 4 characters" onChange={e => this.handleTextChange(e, 'regUsername')}/>
              </div>
              <div>Choose a password:
                <input type="password" ref='pwd1' onChange={e => this.handleTextChange(e, 'regPassword')}/>
              </div>
              <div>Confirm Password:
                <input type="password" ref='pwd2' onChange={e => this.handleTextChange(e, 'regPassword2')}/>
              </div>
              <div>
              <button type="submit" style={styles.button} onClick={this.handleRegisterClick}>Sign me up!</button>
              </div>
            </form>
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
    marginRight: '20px',
    marginTop: '30px'
  },
  button: {
    backgroundColor: 'lightblue'
  },
  form: {
    marginTop: '80 px'
  }
}

export default Login;