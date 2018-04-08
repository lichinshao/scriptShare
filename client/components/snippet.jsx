import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

class Snippet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      title: 'Snippet Title',
      description: 'Snippet Description'
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleTextChange(e, field) {
    this.setState({[field]: e.target.value});
  }

  handleCreateClick() {
    let snippet = {
      title: this.state.title,
      description: this.state.description,
      text: this.state.text
    };
    this.props.submitSnippet(snippet);
  }


  render() {
    let snippet = this.props.snippet;
    var title = '';
    var desc = '';
    var text = '';
    if (snippet) {
      title = snippet.title;
      desc = snippet.description;
      text = snippet.text
      console.log('snippet', snippet)
      console.log(title, desc, text)
    } else {
      title = this.state.title;
      desc = this.state.desc;
    }
    return (
      <div className="container">
        <div className="snippet-info">
          <div className="snippet-title">
            <input value={title} onChange={e => this.handleTextChange(e, 'title')}/>
          </div>
          <div>
            <input value={desc} onChange={e => this.handleTextChange(e, 'description')}/>
          </div>
        </div>
        <div className="snippet-textarea">
          <textarea value={text} onChange={e => this.handleTextChange(e, 'text')}>
          </textarea>
        </div>
        <button onClick={this.handleCreateClick}>Create Snippet!</button>
      </div>
    )

  }
}

export default Snippet;