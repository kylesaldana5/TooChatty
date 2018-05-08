import React, { Component } from 'react';
import axios from 'axios';
import './Messenger.css'
import ContactsMessage from './ContactsMessage/ContactsMessage';
import WatsonMessage from './WatsonMessage/WatsonMessage';
import Contacts from './Contacts/Contacts'


export default class Messenger extends Component {

    constructor(props) {
        super(props)

        this.state = {
            height: window.innerHeight,
            messages: [],
            phoneNumbers: [],
            isHidden: true,
            }
        this.toggleHidden = this.toggleHidden.bind(this)
        
        this._onResize = this._onResize.bind(this)
    }

    _onResize() {
        this.setState({
            height: window.innerHeight
        })
    }

    // all request to the server should happen inside here
    componentDidMount() {
        window.addEventListener("resize", this._onResize)

        // get request to get all information from message table
        axios.get('http://localhost:5000/texts')
            .then(response => {
                this.setState({ messages: response.data })                                                                        
            })
            .catch(error => {
                console.log(error);
            });
        
        // get request to get non duplicate phone numbers
        axios.get('http://localhost:5000/numbers')
            .then(response => {
                this.setState({ phoneNumbers: response.data }) 
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize)

    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }



    render() {
        
        // mapping over data to insert into contacts message and watson message component 
        const messages = this.state.messages.map((message, index) => {
            return (
                <div key={index}>
                    <ContactsMessage text={message.contactsText} />
                    <WatsonMessage text={message.watsonText} />
                </div>
            )
        })        

        // mapping over data to insert into contacts component 
        const contacts = this.state.phoneNumbers.map((number, index) => {
            return <Contacts key={index} number={number.contactsPhone} onClick={this.toggleHidden} />
            
        })
        

        const { height } = this.state;
        const style = {
            height: height
        }

        return (
            <div id="container">
                <aside id="sidebar"> {contacts}</aside>
                <section id="main">
                    <section id="messages-list">{!this.state.isHidden && messages}</section>
                </section>
            </div>
        )
    }
}


