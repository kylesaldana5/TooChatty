import React from 'react';
import './Contacts.css'
const contacts = (props) => <div> <h1 onClick={props.onClick} className="message-author"> {props.number}</h1>  </div>

export default contacts;
