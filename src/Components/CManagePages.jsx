import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './CLogin';
import Main from './CMain';
import Register from './CRegistration';
import NotesList from './CNotes';

class ManagePages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      whoIsLogged: '',
      user:{}
    }
  }

  getUserFromReg = (user) => {
    let newArray = [...this.state.users, user]
    this.setState({ users: newArray })
  }

  getNoteFromMain = (note) => {
    let user = this.state.users.find(user => user.email === this.state.whoIsLogged)
    let arr = this.state.users.filter(u => u.email !== user.email)
    user.notes = [...user.notes, note]
    this.setState({ users: [...arr, user] ,user:user})
  }

  removeNote = (index) => {
    let newArr = this.state.user.notes.filter((item, i) => i !== index)
    this.setState(this.state.user.notes = newArr)
  }

  CheckLogin = (emailLogin, passLogin) => {
    let u = this.state.users.find(user => user.email === emailLogin && user.pass === passLogin);
    if (u) {
      this.setState({whoIsLogged: u.email})
      this.props.history.push({
        pathname: '/main'
        
      });
    }
    else {
      alert("error detiels")
    }
  }

  render() {
    console.log(this.state.whoIsLogged);
    console.log(this.state.users);
    return (
      <Switch>
        <Route exact path="/" render={() => <Login CheckLogin={this.CheckLogin} />} />
        <Route path="/register" render={() => <Register sendUserToManage={this.getUserFromReg} />} />
        <Route path="/main" render={() => <Main user={this.state.whoIsLogged} sendNoteFromMain={this.getNoteFromMain} />} />
        <Route path="/notes" render={() => <NotesList removeNote={this.removeNote}  whoIsLogged={this.state.whoIsLogged} user={this.state.user}/>} />
      </Switch>
    );
  }
}

export default withRouter(ManagePages);