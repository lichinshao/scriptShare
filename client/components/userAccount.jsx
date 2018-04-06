import React from 'react';
import ReactDom from 'react-dom';

class UserAccount extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    let user = this.props.user;
  }
}

export default UserAccount;