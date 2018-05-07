import React, { Component } from 'react';
import classNames from 'classnames'
import axios from 'axios';
import './Messenger.css'
import avatar from '../../assets/avatar.png'
import ContactsMessage from './ContactsMessage/ContactsMessage';
import WatsonMessage from './WatsonMessage/WatsonMessage';
import Contacts from './Contacts/Contacts'


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
                this.setState({ messages: response.data })
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
        const messages = this.state.messages.map((message, index) => {
            return (
                <div key={index}>
                    <ContactsMessage text={message.contactsText} />
                    <WatsonMessage text={message.watsonText} />
                </div>
            )
        })

        const contacts = this.state.messages.map((message, index) => {
        return <Contacts key={index} name={message.contactsPhone}/> 
        })

        const { height } = this.state;
        const style = {
            height: height
        }

        return (
            <div id="container">
                <aside id="sidebar">{contacts}</aside>
                <section id="main">
                    <section id="messages-list">{messages}</section>
                </section>
            </div>
        )
    }
}


