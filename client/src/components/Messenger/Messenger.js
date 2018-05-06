import React, { Component } from 'react';
import classNames from 'classnames'
import axios from 'axios';
import avatar from '../../assets/avatar.png'
import ContactsMessage from './ContactsMessage/ContactsMessage';
import WatsonMessage from './WatsonMessage/WatsonMessage';

export default class Messenger extends Component {

    constructor(props) {
        super(props)

        this.state = {
            height: window.innerHeight,
            messages: [],
        }

        this._onResize = this._onResize.bind(this)
    }

    _onResize() {
        this.setState({
            height: window.innerHeight
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this._onResize)

        axios.get('http://localhost:5000/texts')
            .then(response => {
                this.setState({messages: response.data})
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize)

    }

    render() {
        const messages = this.state.messages.map((message, index) =>{
            return (
            <div key={index}>
            <ContactsMessage 
            name={message.contactsPhone} 
            text={message.contactsText}
            />
            <WatsonMessage 
            name={message.twilioPhone}
            text={message.watsonText}
            />
            </div>
            )
        })
        const { height} = this.state; 
        const style = {
            height: height
        } 

        return (
            <div style={style} className="app-messenger">
                <div className="header">
                    <div className="left">
                        <div className="actions">
                        </div>
                    </div>
                    <div className="content"><h2>Title</h2></div>
                    <div className="right">
                        <div className="user-bar">
                            <div className="profile-name">Kyle Saldana</div>
                            <div className="profile-image">
                                <img src={avatar} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="sidebar-left">Left sidebar</div>
                    <div className="content">
                        <div className="messages">
                            {messages}
                        </div>

                        <div className="messenger-input">
                            <div className="text-input">
                                <textarea placeholder="write your message" />
                            </div>
                            <div className="actions">
                                <button className="">Send</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sidebar-right">Right sidebar</div> */}
                </div>
            </div>
        )
    }
}


