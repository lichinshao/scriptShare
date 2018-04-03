import React from 'react';
import { Table } from 'react-bootstrap'

class CreateSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: {
        '1' : 'hi there',
      },
      currentRow: 1,
      newLine: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.handleSnippetKeyDown = this.handleSnippetKeyDown.bind(this);
    this.setRowContent = this.setRowContent.bind(this);
    this.renderSnippetBox = this.renderSnippetBox.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidUpdate() {
    this.changeFocus();
  }



  handleSubmit() {
    let snippet = this.state.rows;
    console.log('snippet', snippet)
  }

  changeFocus() {
    if (this.state.newLine) {
      let curFocus = document.activeElement.id;
      curFocus = Number(curFocus.substring(10));
      this.refs[curFocus + 1].focus();
    }
  }

  handleSnippetKeyDown(e) {
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
    console.log('in key down', e.which)
    if (e.which === 8) {
      console.log('curr active', document.activeElement.id.substring(10))
      let current = Number(document.activeElement.id.substring(10)) + 1;
      current = current.toString();
      console.log('current after', current)
      let currentRowContent = this.state.rows[current];
      console.log(currentRowContent)
    }
  }

  setRowContent (e, rowNumber) {
    let rows = this.state.rows;
    let rowNum = rowNumber.toString();
    rows[rowNum] = e.target.value;
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
        <div style={styles.rowContent}><input type="text" id={'snippetRow' + index} ref={index} placeholder={rowString} onChange={(e) =>this.setRowContent(e, rowNumber)}/></div>
      </div>
    )
  }


  renderSnippetBox() {
    return(
      <div id="snippet-container" tabIndex="0" style={styles.textarea} onKeyDown={this.handleSnippetKeyDown}>
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