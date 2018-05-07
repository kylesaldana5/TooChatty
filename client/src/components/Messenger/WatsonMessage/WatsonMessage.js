import React from 'react';
import avatar from '../../../assets/avatar.png'
import './WatsonMessage.css'

const WatsonMessage = (props) => {
    return (
        // <div className="">
            <div className="watson-message">
                <div className="message-user-image">
                    {/* <img src={avatar}/> */}
                </div>
                <div className="message-body">
                    <div className="message-author"> {props.name} </div>
                    <div className="message-text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default WatsonMessage;