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
    }
   // this.changeView = this.changeView.bind(this);
    this.login = this.login.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.getSnippetID = this.getSnippetID.bind(this);

  }

  componentWillMount() {
    //this.getSnippetID();
  }

  getSnippetID() {
    // console.log('in get snippetID')
    // console.log('history', this.props.history)
    axios.get('/api/getSnippetID')
      .then(res => {
        console.log('res', res.data)
        // this.setState({snippetID: res.data.id});
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
          // this.props.history.push(``)
        }
      })
      .catch(error => console.log('error', error))
    //this.setState({view: 'snippet'})
  }

  login(user) {
    axios.get('/api/login', {params: user})
      .then(res => {
        if (res.data === 'user DNE') {
          alert('Sorry! username was not found.')
        } else if (res.data === 'incorrect password') {
          alert('Incorrect Password. Please try again.')
        } else {
          this.setState({user: res.data, view: 'userAccount'});
          this.props.history.push(`/${res.data.username}` )
        }
      })
      .catch(error => console.log('error logging in', error))
  }

  submitSnippet() {

  }

  render() {
    return (

        <Switch>
          <Route exact path='/'
            render={() => <Login login={this.login} registerUser={this.registerUser}/>}>
          </Route>
          <Route exact path='/:username/'
            render={() => <UserAccount user={this.state.user} history={this.props.history} newSnippet={this.getSnippetID}/>}>
          </Route>
          <Route path='/:username/:snippetID'
            render={() => <Snippet user={this.state.user} history={this.props.history}/> }>
          </Route>
          <Route path='*' component={Login}></Route>
        </Switch>

    )
  }
}

const App = withRouter(BaseApp);

export default App;