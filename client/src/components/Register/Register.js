import React from "react";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

const register = () => {

    return (
        <MuiThemeProvider>
            <div>
                <h1>Register</h1>
                <div className="text-field">
                    <TextField
                        hintText=""
                        floatingLabelText="First Name"
                        name="First Name"
                    />
                    <TextField
                        hintText=""
                        floatingLabelText="Last Name"
                        name="Last Name"
                    />
                    <TextField
                        hintText=""
                        floatingLabelText="Username"
                        name="Username"
                    />
                    <TextField
                        hintText=""
                        floatingLabelText="Password"
                        name="Password"
                    />
                    <TextField
                        hintText=""
                        floatingLabelText="Twilio Number"
                        name="Twilio Number"
                    />
                    <RaisedButton> Register </RaisedButton>
                </div>
            </div>
        </MuiThemeProvider>

    )

}

export default register

