import React, { Component } from 'react';
import './Contacts.css'
class Contacts extends Component {
    render() {
        return (
            <div>
                <h1 id={this.props.id} onClick={this.props.onClick} className="message-author"> {this.props.number}</h1>
            </div>
        )
    }
}

export default Contacts;
