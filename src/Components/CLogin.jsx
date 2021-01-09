import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailLogin: '',
            passLogin: '',
        }
    }

    emailInput = (e) => {
        this.setState({ emailLogin: e.target.value })
        console.log(e.target.value);
    }

    passInput = (e) => {
        this.setState({ passLogin: e.target.value })
        console.log(e.target.value);
    }

    sendUserLogin = () => {
        this.props.CheckLogin(this.state.emailLogin, this.state.passLogin)
    }

    render() {
        return (
            <center>
                <div >
                    <h1>Welcome to Login Page</h1>
                    <Form style={{ textAlign: 'center', width: 300 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onChange={this.emailInput} />
                            <Form.Text className="text-muted" >
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="password" placeholder="Password" onChange={this.passInput} />
                        </Form.Group>
                        <Button variant="primary" onClick={this.sendUserLogin} >
                            Submit
                       </Button>
                    </Form>
                </div>
                <Link to="/register">To Registertion Page</Link>
            </center>
        );
    }
}

export default withRouter(Login);