import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

class Snippet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      snippetID: ''
    }
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }


  newSnippet() {
  }

  handleTextAreaChange(e) {
    this.setState({text: e.target.value});
  }

  handleCreateClick(e) {
    console.log('text in text area', this.state.text)
    //this.props.submitSnippet()
    let snippet = this.state.text;
  }


  render() {
    return (
      <div className="container">
        <div className="snippet-info">
          <div className="snippet-title">
            <input placeholder="Snippet title" />
          </div>
          <div>
            <input placeholder="Snippet Description" />
          </div>
        </div>
        <div className="snippet-textarea">
          <textarea onChange={e => this.handleTextAreaChange(e)}>
          </textarea>
        </div>
        <button onClick={this.handleCreateClick}>Create Snippet!</button>
      </div>
    )
  }
}

export default Snippet;