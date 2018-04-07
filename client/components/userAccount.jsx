import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Snippet from './snippet.jsx';
import axios from 'axios';

class UserAccount extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
    this.handleCreateClick = this.handleCreateClick.bind(this);
    // this.submitSnippet = this.submitSnippet.bind(this);
  }

  handleCreateClick() {
    this.props.newSnippet();
  }

  render() {
    //console.log('history in useraccount', this.context)
    let user = this.props.user;
    return (
      <div className="container">
        <p>Welcome, {user.firstname}!</p>
        <button type="button" onClick={this.handleCreateClick}>Create New Snippet</button>
      </div>
    )
  }
}

// UserAccount.contextTypes = {
//   history: PropTypes.object
// }

export default UserAccount;