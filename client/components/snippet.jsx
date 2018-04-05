import React from 'react';
import ReactDom from 'react-dom';

class Snippet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  handleTextAreaChange(e) {
    console.log('text', e.target.value)
    this.setState({text: e.target.value});
  }

  handleCreateClick() {
    console.log('clicked! ')
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