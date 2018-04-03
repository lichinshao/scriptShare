import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Login from './login.jsx';
import CreateSnippet from './createSnippet.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      view: 'createSnippet'
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({view: view});
  }

  login(user) {

  }

  renderView() {
    let view = this.state.view;
    switch(view) {
      case 'login': return <Login changeView={this.changeView}/>;
      case 'createSnippet': return <CreateSnippet />
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