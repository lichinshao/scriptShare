import React from 'react';
import ReactDom from 'react-dom';

import axios from 'axios';

class Snippet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      title: '',
      description: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.setSnippet = this.setSnippet.bind(this);
  }

  componentWillMount() {
    this.setSnippet();
  }

  setSnippet() {
    let snippet = this.props.snippet;
    if (snippet) {
      this.setState({
        title: snippet.title,
        description: snippet.description,
        text: snippet.snippet
      })
    } else {
      this.setState({
        title: '',
        description: '',
        text: ''
      })
    }
  }

  handleTextChange(e, field) {
    this.setState({[field]: e.target.value});
  }

  handleSaveClick() {
    let snippet = {
      title: this.state.title,
      description: this.state.description,
      text: this.state.text
    };
    if (this.props.snippet) {
      snippet.id = this.props.snippet.id
    }
    this.props.submitSnippet(snippet);
  }


  render() {

    return (
      <div className="container">
        <div className="snippet-info">
          <div className="snippet-title" style={styles.rows}>
            <span>Title</span>
            <textarea rows="1" style={styles.title} defaultValue={this.state.title} onChange={e => this.handleTextChange(e, 'title')}>
            </textarea>
          </div>
          <div className="snippet-description" style={styles.rows}>
            <span>Description</span>
            <textarea rows="1" style={styles.description} defaultValue={this.state.description} onChange={e => this.handleTextChange(e, 'description')}>
            </textarea>
          </div>
        </div>
        <div className="snippet-textarea" style={styles.rows}>
          <span>Enter your text here:</span>
          <textarea onChange={e => this.handleTextChange(e, 'text')} defaultValue={this.state.text}>
          </textarea>
        </div>
        <button onClick={this.handleSaveClick}>Save!</button>
      </div>
    )

  }
}

const styles = {
  title: {
    width: '300px'
  },
  description: {
    width: '300px'
  },
  rows: {

  }
}

export default Snippet;