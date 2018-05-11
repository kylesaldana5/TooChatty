import React, { Component } from 'react';
import './Contacts.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { List, ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';


class Contacts extends Component {
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
            <MenuItem>Name</MenuItem>
            <MenuItem>Picture</MenuItem>            
        </IconMenu>
    );


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





