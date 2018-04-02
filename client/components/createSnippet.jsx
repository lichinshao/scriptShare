import React from 'react';
import { Table } from 'react-bootstrap'

class CreateSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: {
        '1' : 'hi there',
        '2' : ''
      },
      currentRow: 1,
      newLine: false
    }
    this.renderSnippetBox = this.renderSnippetBox.bind(this);
    this.handleTextAreaEnter = this.handleTextAreaEnter.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.setRowContent = this.setRowContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.newLine) {
      let newLine = this.state.currentRow;
      this.refs[newLine - 1].focus();
    }
  }

  handleSubmit() {
    let snippet = this.state.rows;
    console.log('snippet', snippet)
  }

  handleTextAreaEnter(e) {
    let curr = Number(this.state.currentRow);
    let next = curr + 1;
    let newRowNumber = next.toString();
    let rows = this.state.rows;
    if (e.which === 13) {
      e.preventDefault();
      rows[newRowNumber] = '';
      this.setState({
        currentRow: next,
        newLine: true
      });
    }
  }

  renderRows() {
    let rows = this.state.rows;
    let rowNumbers = Object.keys(rows);
    let numberOfRows = rowNumbers.length;
    let createRowDiv = rowNumbers.map((number, index) => this.renderRow(number, index))
    return createRowDiv;
  }

  renderRow(rowNumber, index) {
    let rows = this.state.rows;
    let rowString = rows[rowNumber];

    return (
      <div style={styles.row} key={index}>
        <div style={styles.rowNumber}>{rowNumber}</div>
        <div style={styles.rowContent}><input type="text" ref={index} placeholder={rowString} onChange={(e) =>this.setRowContent(e, rowNumber)}/></div>
      </div>
    )
  }

  setRowContent (e, rowNumber) {
    let rows = this.state.rows;
    let rowNum = rowNumber.toString();
    rows[rowNum] = e.target.value;
  }


  renderSnippetBox() {
    return(
      <div id="snippet-container" tabIndex="0" style={styles.textarea} onKeyPress={this.handleTextAreaEnter}>
          {this.renderRows()}
      </div>
    )
  }

  render() {
    // this.changeFocus();
    return (
      <div className="container">
        <div className="snippet-description" style={styles.snippetDesc}>
          <input type="text" className="description" placeholder="Snippet description..."/>
        </div>
        <div>
          <input className="snippet-name" type="text" placeholder="Name your snippet!"/>
        </div>
        {this.renderSnippetBox()}
        <div>
          <button type="submit" onClick={this.handleSubmit}>Create snippet</button>
        </div>
      </div>
    )
  }
}

const styles = {
  'rowNumber': {
    backgroundColor: 'lightblue',
    display: 'inline-block',
    width: '30px'
  },
  'rowContent' : {
    display: 'inline-block',
    width: '350px'
  },
  'row' : {
    position: 'relative',
    display: 'block'
  },
  'form': {
    marginTop: '20px',
    marginLeft: '50px',
    display: 'inline'
  },
  'snippetBody': {
    marginTop: '15px',
  },
  'snippetDesc': {
    marginLeft: '50px',
    marginTop: '50px'
  },
  'rowEntry': {
    display: 'inline-block'
  }


}

export default CreateSnippet;