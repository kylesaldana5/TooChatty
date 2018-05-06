import React from 'react';
import './ContactsMessage.css'

const contactsMessage = (props) => {
    return (
        <div className="messages">
            <div className="message">
                <div className="message-user-image">
                    <img />
                </div>
                <div className="message-author"> {props.name} </div>
                <div className="message-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default contactsMessage;