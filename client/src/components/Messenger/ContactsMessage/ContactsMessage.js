import React, { Component } from 'react';
import './ContactsMessage.css'

class ContactsMessage extends Component {
    render() {
        return (

            <div className="message">
                <div className="message-body">
                    <div className="contact-text">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default ContactsMessage;