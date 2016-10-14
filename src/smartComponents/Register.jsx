import React from 'react';

import env from '../../env'; const BACKEND_URL = env.BACKEND_URL;

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan500 } from 'material-ui/styles/colors';

var $ = window.$;

class Register extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
    }
  }

  changeField(e, stateName) {
    this.setState({ [stateName]: e.target.value});
  }

  changeFirstName = e => this.setState({firstName: e.target.value});

  registerUser = () => {
    $.post(BACKEND_URL + '/newUser', this.state);
  };


  render () { return <div id="sc-register">
    <AppBar title="Goodful"
            iconElementRight={<FlatButton label="Login"/>}
    />
    <div style={{margin: "64px"}}></div>
    <div style={{ margin: "24px 48px", position: "inline-block", textAlign: "left"}}>
      <Paper style={{maxWidth: "480px", padding: "24px", opacity: "0.94"}}>
        <div>
          <h2>Some catchy thing can go right here.</h2>

          Sign up here!
        </div>
        <TextField floatingLabelFixed={true} floatingLabelText="First Name" hintText={"Enter your first name"} floatingLabelStyle={{cyan500}} value={this.state.firstName} onChange={(e) => this.changeField(e, "firstName")}/>
        <TextField floatingLabelFixed={true} floatingLabelText="Last Name" hintText={"Enter your last name"} floatingLabelStyle={{cyan500}} value={this.state.lastName} onChange={(e) => this.changeField(e, "lastName")}/>
        <TextField floatingLabelFixed={true} floatingLabelText="email" hintText={"name@email.com"} floatingLabelStyle={{cyan500}} value={this.state.email} onChange={e => this.changeField(e, "email")}/>
        <TextField type="date" floatingLabelFixed={true} floatingLabelText="email" floatingLabelStyle={{cyan500}} value={this.state.dob} onChange={e => this.changeField(e, "dob")}/>
        <div style={{margin: "24px"}}/>
        <RaisedButton primary={true} disabled={!(this.state.firstName && this.state.lastName && this.state.email)}  label="Join Goodful Network" onClick={this.registerUser}/>
      </Paper>
      <Paper></Paper>
    </div>
  </div>; }
}

export default Register