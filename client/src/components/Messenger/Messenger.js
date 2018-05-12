import React, { Component } from 'react';
import axios from 'axios';
import './Messenger.css'
import ContactsMessage from './ContactsMessage/ContactsMessage';
import WatsonMessage from './WatsonMessage/WatsonMessage';
import Contacts from './Contacts/Contacts'

class Messenger extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            nameAndNumbers: [],
            number: ""
        }
    }


    // all request to the server should happen inside here
    componentDidMount() {

        // get request to get non duplicate phone numbers
        axios.get('http://localhost:5000/getName')
            .then(response => {
                console.log('number', response.data);
                this.setState({ nameAndNumbers: response.data })
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
        const contacts = this.state.nameAndNumbers.map((data, index) => {
            return (
                <Contacts
                    key={index}
                    id={data.phone}
                    number={data.phone}
                    name={data.name}
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





