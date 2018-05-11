import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';

class Login extends Component {
    
    state = {
        isLoggedIn: false,
        currentUsername: null,
        currentUserId: null,
        open: false,
        message: '',
    }

    userName = React.createRef();
    userPassword = React.createRef();

    userLogin = () => {
        let user = {
            username: this.userName.input.value,
            password: this.userPassword.input.value,
        };
        this.login(user);
    };

    //LOG IN
    login = user => {
        axios.post(`http://localhost:5000/server/login`, user)
            .then(user => {
                this.setState({
                    message: "",
                    isLoggedIn: true,
                    currentUsername: user.data.username,
                    currentUserId: user.data.id,
                    open: true
                })
            })
            .then(() => {
                this.props.history.replace('/messenger')
            })
            .catch(err => {
                console.log('err',err );
                
                this.setState({message : err.response.data.message})
            });
    };
    
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Login</h1>
                    <div className="text-field">
                        <TextField
                            ref={input => {
                                this.userName = input;
                            }}
                            hintText=""
                            floatingLabelText="User Name"
                            name="User Name"
                        />
                        <TextField
                            ref={input => {
                                this.userPassword = input;
                            }}
                            hintText=""
                            floatingLabelText="Password"
                            name="Password"
                        />
                        <RaisedButton onClick={(e) => { this.userLogin(e)}}> Login </RaisedButton>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login