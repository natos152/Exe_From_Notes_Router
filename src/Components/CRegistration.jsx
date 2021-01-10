import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            confirm_pass: '',
            notes: []
        }
    }

    emailInput = (e) => {
        this.setState({ email: e.target.value })
        console.log(e.target.value);
    }
    passInput = (e) => {
        this.setState({ pass: e.target.value })
        console.log(e.target.value);
    }
    ConfirmPassInput = (e) => {
        this.setState({ confirm_pass: e.target.value })
        console.log(e.target.value);
    }

    ClickToRegister = () => {
        let checkEmail = this.props.users.find(user => user.email === this.state.email)
        if (checkEmail) {
            alert("This email is exist ")
            return
        }
        if (this.state.pass === this.state.confirm_pass) {
            let obj = { email: this.state.email, pass: this.state.pass, notes: this.state.notes }
            this.props.sendUserToManage(obj)
            this.props.history.push({
                pathname: '/'
            })
        }
        else {
            alert("The password is not same, try again.");
        }
    }

    render() {
        return (
            <center>
                <div >
                    <h1>Welcome to Registeration Page</h1>
                    <Form style={{ textAlign: 'center', width: 300 }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" onChange={this.emailInput} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="password" placeholder="Password" onChange={this.passInput} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="password" placeholder="Confirm Password" onChange={this.ConfirmPassInput} />
                        </Form.Group>
                        <Button variant="primary" onClick={this.ClickToRegister}>
                            Submit
                </Button>
                    </Form>
                </div>
            </center>
        );
    }
}

export default withRouter(Register);