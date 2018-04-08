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
    this.renderSnippets = this.renderSnippets.bind(this);
  }


  handleCreateClick() {
    this.props.newSnippet();
  }

  renderSnippets() {
    let snippets = this.props.snippets;
    return(
      snippets.map((snippet, ind) => (
        <li key={ind}>
          <span onClick={() => this.props.editSnippet(snippet)}>{snippet.title}</span>
        </li>
      ))
    )
  }

  render() {
    //console.log('history in useraccount', this.context)
    let user = this.props.user;
    return (
      <div className="container">
        <p>Welcome, {user.firstname}!</p>
        <button type="button" onClick={this.handleCreateClick}>Create New Snippet</button>
        <div>
          <p>Your Snippets:</p>
          <ul>
          {this.renderSnippets()}
          </ul>
        </div>
      </div>
    )
  }
}

// UserAccount.contextTypes = {
//   history: PropTypes.object
// }

export default UserAccount;