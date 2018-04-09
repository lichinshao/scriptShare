import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, withRouter, Switch} from 'react-router-dom';
// import { AxiosProvider, Request, Get, } from 'react-axios';
import axios from 'axios';
import Login from './login.jsx';
//import CreateSnippet from './createSnippet.jsx';
import Snippet from './snippet.jsx';
import UserAccount from './userAccount.jsx';
import { Tabs, Tab } from 'react-bootstrap';

class BaseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      currentSnippet: ''
    }
    this.login = this.login.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.getSnippetID = this.getSnippetID.bind(this);
    this.submitSnippet = this.submitSnippet.bind(this);
    this.editSnippet = this.editSnippet.bind(this);
  }

  componentWillMount() {
  }

  getSnippetID() {
    axios.get('/api/getSnippetID')
      .then(res => {
        this.setState({snippetID: res.data.id});
        this.props.history.push(`/${this.state.user.username}/${res.data.id}`);
      })
      .catch(error => console.log('error getting ID'))
  }

  registerUser(user) {
    axios.post('/api/registerUser', user)
      .then(res => {
        if (res.data === 'username is already taken!') {
          alert('Oh no! The username you have chosen is already in use. Please try another.');
        } else {
          this.setState({user: res.data})
          this.props.history.push(`/${res.data.username}`)
        }
      })
      .catch(error => console.log('error', error))
  }

  login(user) {
    axios.get('/api/login', {params: user})
      .then(res => {
        if (res.data === 'user DNE') {
          alert('Sorry! username was not found.')
        } else if (res.data === 'incorrect password') {
          alert('Incorrect Password. Please try again.')
        } else {
          let user = {
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            username: res.data.username
          }
          this.setState({user: user, snippets: res.data.snippets});
          this.props.history.push(`/${res.data.username}` )
        }
      })
      .catch(error => console.log('error logging in', error))
  }

  submitSnippet(snippet) {
    if (!snippet.id) {
      snippet.id = this.state.snippetID;
    }
    snippet.username = this.state.user.username;
    axios.post('/api/submitSnippet', snippet)
      .then(res => {
        this.setState({snippets: res.data, currentSnippet: ''})
        this.props.history.push(`/${this.state.user.username}`)
      })
      .catch(error => console.log('error submitting snippet'))
  }

  editSnippet(snippet) {
    this.setState({currentSnippet: snippet});
    this.props.history.push(`/${this.state.user.username}/${snippet.id}`)
  }

  render() {
    return (

        <Switch>
          <Route exact path='/'
            render={() => <Login login={this.login} registerUser={this.registerUser}/>}>
          </Route>
          <Route exact path='/:username/'
            render={() => <UserAccount user={this.state.user} history={this.props.history} newSnippet={this.getSnippetID} snippets={this.state.snippets} editSnippet={this.editSnippet}/>}>
          </Route>
          <Route path='/:username/:snippetID'
            render={() => <Snippet snippet={this.state.currentSnippet} user={this.state.user} history={this.props.history} submitSnippet={this.submitSnippet}/> }>
          </Route>
          <Route path='*' component={Login}></Route>
        </Switch>

    )
  }
}

const App = withRouter(BaseApp);

export default App;