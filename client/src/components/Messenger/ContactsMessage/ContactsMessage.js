import React from 'react';
import './ContactsMessage.css'

const contactsMessage = (props) => {
    return (

        <div className="message">
            <div className="message-user-image">
                {/* <img src={avatar}/> */}
            </div>
            <div className="message-body">
                <div className="contact-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>

    )
}

export default contactsMessage;