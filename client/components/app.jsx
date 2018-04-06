import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link } from 'react-router-dom';
// import { AxiosProvider, Request, Get, } from 'react-axios';
import axios from 'axios';
import Login from './login.jsx';
//import CreateSnippet from './createSnippet.jsx';
import Snippet from './snippet.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      view: 'login'
    }
    this.changeView = this.changeView.bind(this);
    this.login = this.login.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  changeView(view) {
    this.setState({view: view});
  }

  registerUser(user) {
    axios.post('/api/registerUser', user)
      .then(res => {
        if (res.data === 'username is already taken!') {
          alert('Oh no! The username you have chosen is already in use. Please try another.');
        } else {
          this.setState({user: res.data, view: 'userAccount'})
        }
      })
      .catch(error => console.log('error', error))
    //this.setState({view: 'snippet'})
  }

  login(user) {
    axios.get('/api/login', {params: user})
      .then(res => {
        console.log('res', res)
      })
      .catch(error => console.log('error logging in', error))
  }

  submitSnippet() {

  }

  renderView() {
    let view = this.state.view;
    switch(view) {
      case 'login': return <Login login={this.login} registerUser={this.registerUser}/>;
     // case 'createSnippet': return <CreateSnippet />;
      case 'snippet': return <Snippet />;
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}

export default App;