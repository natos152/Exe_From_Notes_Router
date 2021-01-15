import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',

    }
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleDesc = (e) => {
    this.setState({ desc: e.target.value })
  }

  addNote = () => {
    let obj = { title: this.state.title, desc: this.state.desc }
    this.props.sendNoteFromMain(obj)
    this.props.history.push({
      pathname: '/notes',
    })

  }
  render() {
    return (
      <center>
        <h2>dsadada</h2>
        <h1>Welcome to Main Page</h1>
        <div style={{ border: '2px solid black', width: 400, margin: 50, padding: 20 }}>
          <Form style={{ textAlign: 'center', width: 300 }}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" value={this.state.title} placeholder="Title" onChange={this.handleTitle} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" value={this.state.desc} placeholder="Description" onChange={this.handleDesc} />
            </Form.Group>
            <Button variant="primary" onClick={this.addNote}>
              Add
                </Button>
          </Form>
          <br />
          <Link to="notes">To Note Page</Link>
        </div>
        <Link to='/' >Back To Login</Link>
      </center>
    );
  }
}

export default withRouter(Main);