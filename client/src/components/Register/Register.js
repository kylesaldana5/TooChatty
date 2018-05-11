import React, { Component } from "react";
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

class Register extends Component {

    state={
        isLoggedIn: false,
        currentUsername: null,
        currentUserId: null,
        open: false,
        message: '',
    }



// Creating references to grab values in user forms
    // first_name = React.createRef();
    // last_name = React.createRef();
    // username = React.createRef();
    // password = React.createRef();
    // email = React.createRef();
    // twilio = React.createRef()
    
    
// Handler for passing user obj to server
    registerClick = () => {
        let newUser = {
            first_name: this.first_name.input.value,
            last_name: this.last_name.input.value,
            username: this.username.input.value,
            email: this.email.input.value,
            password: this.password.input.value,
            twilio : this.twilio.input.value
        };
        this.register(newUser);
    };

    //REGISTER
    register = newUser => {
        axios.post(`http://localhost:5000/server/register`, newUser)
            .then(user => {
                console.log('CLIENT USER: ', user);
                axios.post(`http://localhost:5000/server/login`, { username: newUser.username, password: newUser.password });
                this.setState({
                    message: "",
                    isLoggedIn: true,
                    currentUsername: user.data.username,
                    currentUserId: user.data.id,
                    open: false
                })
            })
            .then(()=>{
                this.props.history.replace('/messenger')
            })
            .catch(err => {
                this.setState({ "message": err.response.data.message })
            })
    };


            
    render() {    
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Register</h1>
                    <div className="text-field">
                        <TextField
                            hintText=""
                            floatingLabelText="First Name"
                            name="First Name"
                            ref={input => {
                                this.first_name = input;
                            }}
                        />
                        <TextField
                            hintText=""
                            floatingLabelText="Last Name"
                            name="Last Name"
                            ref={input => {
                                this.last_name = input;
                            }}

                        />
                        <TextField
                            hintText=""
                            floatingLabelText="Username"
                            name="Username"
                            ref={input => {
                                this.username = input;
                            }}
                        />
                        <TextField
                            hintText=""
                            floatingLabelText="Email"
                            name="Email" ref={input => {
                                this.email = input;
                            }}
                        />
                        <TextField
                            hintText=""
                            floatingLabelText="Password"
                            name="Password" 
                            ref={input => {
                                this.password = input;
                            }}
                        />
                        <TextField
                            hintText=""
                            floatingLabelText="Twilio Number"
                            name="Twilio Number"
                            ref={input => {
                                this.twilio = input;
                            }}
                        />
                        <RaisedButton onClick={(e) => { this.registerClick(e) }}> Register </RaisedButton>
                    
                    </div>
                </div>
            </MuiThemeProvider>

        )
    }
}

export default Register

