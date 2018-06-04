"use strict";
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const keys = require('../key')
const io = require('../../socket').io;

let contexts = [];

module.exports.messageCovo = (req, res) => {
        
        // grabbing need information to pass along to watson and twilio 
        let message = req.query.Body;
        let number = req.query.From
        let twilioNumber = req.query.To;

        // IMPORTANT keys
        const twilioSID = keys.twilioSID;
        const twilioAuthToken = keys.twilioAuthToken;
        const watsonUsername = keys.watsonUsername;
        const watsonPassword = keys.watsonPassword ;     
        const workspace_id = keys.workspace_id ; 

        //   checking phone number has a context number that already exist
        
        let context = null;
        let index = 0;
        let contextIndex = 0;
        contexts.forEach(function (value) {
            console.log(value.from);
            if (value.from == number) {
                context = value.context;
                contextIndex = index;
            }
            index = index + 1;
        });

        let conversation = new AssistantV1({
            username: watsonUsername,
            password: watsonPassword,
            version: '2018-02-16'
        });

        conversation.message({
            input: { text: message },
            workspace_id: workspace_id,
            context: context
        }, function (err, response) {
            if (err) {
                console.error(err);
            } else {
                if (context == null) {
                    contexts.push({ 'from': number, 'context': response.context });
                } else {
                    contexts[contextIndex].context = response.context;
                }

                if(response.intents.length > 0){
                let intent = response.intents[0].intent;
                console.log("intent", intent);
                if (intent == "done") {
                    contexts.splice(contextIndex, 1);
                }
                }
                let client = require('twilio')(
                    twilioSID ,
                    twilioAuthToken
                );

                client.messages.create({
                    from: twilioNumber,
                    to: number,
                    body: response.output.text[0]
                }, function (err, message) {
                    if (err) {
                        console.error(err.message);
                    }
                });


                // postgres for the message table
                const { Message } = req.app.get("models");
               const messageCreate =  Message.create({
                    contactsPhone: number,
                    contactsText: encodeURI(message),
                    watsonText: response.output.text[0],
                    twilioPhone: twilioNumber,
                    logging: false

                })
                    .catch((err) => {
                        console.log('err', err);

                    });

                // postgres for the name table
                const {Name} = req.app.get("models");
                const nameCreate = Name.create({
                    phone: number,      
                    logging: false                                  
                })
                    .catch((err) => {
                        console.log('err', err);

                    })
                    .then(() =>
                        Name.findOne({
                            where:{phone:number}
                        })
                    )
                    // Promise array sending updates from the server to client side //web sockets
                    let promiseArr = [nameCreate, messageCreate];
                    Promise.all(promiseArr)
                    .then(([newName, newMessage])=>{
                        
                        io.emit('timer', {name: newName, message: newMessage})
                    })
                    
            }
        });
}