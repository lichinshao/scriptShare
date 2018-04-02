import React from 'react';
import { Table } from 'react-bootstrap'

class CreateSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'rows': 4,
      'currentRow': 1,
    }
    this.renderSnippetBox = this.renderSnippetBox.bind(this);
    this.handleTextAreaEnter = this.handleTextAreaEnter.bind(this);
    this.makeRows = this.makeRows.bind(this);
  }

  makeRows() {
    var results = [];
    var row ='';

    for(let i = 1; i <= this.state.currentRows; i++) {
      console.log('in for loop', i)
      row = ('<div style={styles.row}><div style={styles.rowCount}>{i}</div><div style={styles.rowContent}></div></div>');
      results.push(row);
    }
    console.log('results', results)
    return results.join('')
  }

  handleTextAreaEnter(e) {
    // console.log('current row before', this.state.currentRow)
    let curr = this.state.currentRow;
    curr++;
    console.log('curr ad', curr)
      if (e.which === 13) {
        // $(e.target).children(":first").clone().appendTo(e.target);

        this.setState({'currentRow': curr});
        $(e.target).append('<div style={styles.rowx}><div style={styles.rowCount}>'+ curr +'</div> <div style={styles.rowContent}></div></div>');
        // $(e.target).children().remove();
        // console.log('rows', rows.toString())
        // rows.appendTo($(e.target));
      }
  }

  renderSnippetBox() {

    return(
      <div>
        <input className="snippet-name" type="text" placeholder="Name your snippet!"/>
        <div id="snippet-container" tabIndex="0" style={styles.textarea} onKeyPress={this.handleTextAreaEnter}>
          <div style={styles.row}>
            <div style={styles.rowCount}>1
            </div>
            <div style={styles.rowContent}>
              hi
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="snippet-description" style={styles.snippetDesc}>
        <input type="text" className="description" placeholder="Snippet description..."/>
        </div>
        {this.renderSnippetBox()}
      </div>
    )
  }
}

const styles = {
  'rowCount': {
    backgroundColor: 'lightblue',
    display: 'inline-block',
    width: '30px'
  },
  'rowContent' : {
    display: 'inline-block'
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