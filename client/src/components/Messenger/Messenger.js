import React, { Component } from 'react';
import classNames from 'classnames'
import axios from 'axios';
import avatar from '../../assets/avatar.png'


export default class Messenger extends Component {

    constructor(props) {
        super(props)

        this.state = {
            height: window.innerHeight,
            messages: [],
        }

        this._onResize = this._onResize.bind(this)

        this.addTestMessages = this.addTestMessages.bind(this)
    }

    _onResize() {
        this.setState({
            height: window.innerHeight
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this._onResize)

        this.addTestMessages();

        axios.get('http://localhost:5000/texts')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    addTestMessages() {
        let { messages } = this.state;


        for (let i = 0; i < 100; i++) {

            let isMe = false;

            if (i % 3 === 0) {
                isMe = true
            }
            const newMsg = {
                author: `Author: ${i}`,
                body: `The body of message ${i}`,
                avatar: avatar,
                me: isMe,
            }
            messages.push(newMsg);
        }
        this.setState({ messages: messages })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize)

    }

    render() {
        const { height, messages } = this.state;
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

                            {messages.map((message, index) => {

                                return (

                                    <div key={index} className={classNames('message', { 'me': message.me })}>
                                        <div className="message-user-image">
                                            <img src={message.avatar} alt={"page"} />
                                        </div>
                                        <div className="message-body">
                                            <div className="message-author">{message.me ? 'You' : message.author} says:</div>
                                            <div className="message-text">
                                                <p>
                                                    {message.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}

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


