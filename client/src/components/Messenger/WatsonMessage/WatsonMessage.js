import React from 'react';
import './WatsonMessage.css'

const WatsonMessage = (props) => {
    return (
        
            <div className="watson-message">
                <div className="watson-message-body">
                    <div className="message-author"> </div>
                    <div className="message-text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
    )
}

export default WatsonMessage;