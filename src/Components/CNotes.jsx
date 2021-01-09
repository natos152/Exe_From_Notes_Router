import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props.user);
    return (
      <center>
        <div>
          <h1>Notes list</h1>
          <div style={{ width: 'auto', height: 'auto' }}>
            {this.props.user.notes.map((n, index) => 
              <p key={index} style={{ border: '2px solid black', margin: 10, width: 350, height: 'auto' }}>
                <Button style={{ float: 'right' }} size="sm" variant="danger"
                  onClick={() => this.props.removeNote(index)}>X</Button>
                <b> Title:</b> {n.title} <br />
                <b> Description:</b> {n.desc}
              </p>
            )}
          </div>
          <Link to="main">To Main Page</Link> <br />
          <Link to="/" >Back To Login</Link>
        </div>
      </center>
    );
  }
}

export default withRouter(NotesList);