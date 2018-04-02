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
  }


  renderView() {
    let view = this.state.view;
    switch(view) {
      case 'login': return <Login />;
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