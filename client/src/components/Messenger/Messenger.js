import React, { Component } from 'react';
import axios from 'axios';
import './Messenger.css'
import ContactsMessage from './ContactsMessage/ContactsMessage';
import WatsonMessage from './WatsonMessage/WatsonMessage';
import Contacts from './Contacts/Contacts'
import openSocket from 'socket.io-client';


class Messenger extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            nameAndNumbers: {},
            number: "",
            update: []
        }
        // listening for changes on the server 
        const socket = openSocket('http://localhost:5000');
        socket.on('timer', ({ name, message }) => this.setState((oldState) => 
        ({ messages: [...oldState.messages, message], 
            nameAndNumbers: { ...oldState.nameAndNumbers, [name.phone]: name}
        })));

    }


    // all request to the server should happen inside here
    componentDidMount() {

        // get request to get non duplicate phone numbers
        axios.get('http://localhost:5000/getName')
            .then(response => {
                // reducing state to be added when updated, stops duplication issue
                const nameAndNumbers = response.data.reduce((acc, number)=>({...acc, [number.phone]: number}), {})
                this.setState({ nameAndNumbers })
            })
            .catch(error => {
                console.log(error);
            });

    }

    // grabbing the id of the phone # then to display the corresponding messages
    getMessages = (e) => {
        this.setState({ number: e.target.id }, () => {

            // get request to get all information from message table
            axios.get(`http://localhost:5000/texts/${this.state.number}`)
                .then(response => {
                    this.setState({ messages: response.data })
                })
                .catch(error => {
                    console.log(error);
                });
        });
        
    }




    render() {

        // mapping over data to insert into contacts message and watson message component 
        const messages = this.state.messages.map((message, index) => {
            return (
                <div key={index}>
                    <ContactsMessage text={decodeURI(message.contactsText)} />
                    <WatsonMessage text={message.watsonText} />
                </div>
            )
        })

        // mapping over data to insert into contacts component 
        const contacts = Object.values(this.state.nameAndNumbers).map((data, index) => {   
            return (
                <Contacts
                    key={data.phone}
                    id={data.phone}
                    number={data.phone}
                    first_name={data.first_name}
                    last_name={data.last_name}
                    email={data.email}
                    company={data.company}
                    onClick={this.getMessages}
                />
            )

        })

        return (
            <div>
                <div id="container">
                    <aside id="sidebar"> {contacts}</aside>
                    <section id="main">
                        <section id="messages-list">{messages}</section>
                    </section>
                </div>

            </div>
        )
    }
}

export default Messenger;





