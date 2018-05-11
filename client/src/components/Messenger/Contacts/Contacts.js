import React, { Component } from 'react';
import './Contacts.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400, darkBlack, lightBlack, orange500, blue500 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class Contacts extends Component {
     
    styles = { 
        underlineStyle: {
            borderColor: orange500,
        },
    }
    
    
    iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="edit"
            tooltipPosition="bottom-left"
        >
            <MoreVertIcon color={grey400} />
        </IconButton>
    );
    
    rightIconMenu = (
        <IconMenu iconButtonElement={this.iconButtonElement}>
            <h3 className="icon-menu">First Name</h3>
            <TextField
            name="First Name"
            underlineFocusStyle={this.styles.underlineStyle}
            ref={input => {
                this.first_name = input;
            }}
            />       
            <h3 className="icon-menu">Last Name</h3>
            <TextField 
            name="Last Name"
            underlineFocusStyle={this.styles.underlineStyle}
            ref={input => {
                this.last_name = input;
            }}
            />   
            <h3 className="icon-menu">Company</h3>
            <TextField 
            name="Company"
            underlineFocusStyle={this.styles.underlineStyle}
            ref={input => {
                this.company = input;
            }}
            />     
            <FlatButton onClick={(e) => { this.changeName(e)}}> Submit </FlatButton>
        </IconMenu>
    );

    // handler for passing updated name obj
    changeName = () =>{
       let newName={
            first_name: this.first_name.input.value,
            last_name: this.last_name.input.value,
            company: this.company.input.value,
            phone: this.props.id
        }
        this.updateName(newName)
    }


    // update name by posting to name table 
    updateName = newName => {
        axios.post(`http://localhost:5000/name`, newName)
        .then((name)=>{
            console.log('name',name );
            
        })
    }

    render() {
        return (
            <div>

                <MuiThemeProvider>
                    <List >
                        <ListItem
                            leftIcon={<Avatar src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-fill-circle-512.png" />}
                            primaryText={ <p id={this.props.id} onClick={this.props.onClick} className="message-author"> {this.props.number}</p> }
                            rightIconButton={this.rightIconMenu}
                         />
                    </List>
                    
                </MuiThemeProvider>
            </div>
        )
    }

}


export default Contacts;





