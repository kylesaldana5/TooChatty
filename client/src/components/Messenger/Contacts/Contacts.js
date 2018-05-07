import React from 'react';
import './Contacts.css'
const contacts = (props) => <div> <h1 onClick={props.onClick} className="message-author"> {props.name}</h1>  </div>

export default contacts;
