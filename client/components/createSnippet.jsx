import React from 'react';
import update from 'react-addons-update';
import { Table } from 'react-bootstrap';

class CreateSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: {
        '1' : '',
      },
      currentSize: 1,
      newLine: false,
      deleteLine: false,
      currentRowContent: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.handleSnippetKeyDown = this.handleSnippetKeyDown.bind(this);
    // this.handleEnterClick = this.handleEnterClick.bind(this);
    this.setRowContent = this.setRowContent.bind(this);
    this.renderSnippetBox = this.renderSnippetBox.bind(this);
    this.renderRows = this.renderRows.bind(this);
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
      let curFocus = getRowNumFromID(document.activeElement.id);
      this.refs[curFocus + 1].focus();

    }
  }

  handleSnippetKeyDown(e) {
    let currentSize = Number(this.state.currentSize);

    let rows = this.state.rows;
    let cursor = e.target.selectionStart;
    let curFocus = getRowNumFromID(document.activeElement.id);
    if (e.which === 13) {
      e.preventDefault();
      let newSize = currentSize + 1;
      let newRowLabel = newSize.toString();
      let row = (curFocus + 1).toString();
      let nextRow = (curFocus + 2).toString();
      let rowContent = rows[row];
      rows[newRowLabel] = '';

      if (cursor !== 0 || cursor !== rowContent.length) {
        rows[row] = rowContent.substring(0, cursor)
        rows[nextRow] = rowContent.substring(cursor)
      }
      this.setState({
        currentSize: newSize,
        newLine: true
      });
    } else if (e.which === 8) {
      // console.log('curr active', document.activeElement.id.substring(10))
      let current = Number(document.activeElement.id.substring(10)) + 1;
      current = current.toString();
      // console.log('current after', current)
      let currentRowContent = this.state.rows[current];
      // console.log(currentRowContent)
    } else {

    }
  }

  setRowContent (e, rowNumber) {
    let rows = this.state.rows;
    let rowNum = rowNumber.toString();
    rows[rowNum] = e.target.value;
  }

  renderRows() {
    let rows = this.state.rows;
    // console.log('rows in renderRows', rows)
    let rowNumbers = Object.keys(rows);
    let numberOfRows = rowNumbers.length;
    let createRowDiv = rowNumbers.map((number, index) => {
      let content = rows[number];
      console.log(content)
      return (
        <div style={styles.row} key={index}>
        <div style={styles.rowNumber}>{number}</div>
        <div style={styles.rowContent}><input type="text" id={'snippetRow' + index} ref={index} onChange={(e) =>this.setRowContent(e, number)}/></div>
      </div>
        )
      })
    return createRowDiv;
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
    // console.log('rows in render', this.state.rows)
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
function splitContent(r1, r2) {

}

function getRowNumFromID(IDstring) {
  return Number(IDstring.substring(10))
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