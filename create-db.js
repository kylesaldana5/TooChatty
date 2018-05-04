"use strict";

let models = require("./server/models");

models.sequelize
    .sync({ force: true })
    .then((queryInterface)=>{
        return models.User.create({
            email: "bmoney@gmail.com",
            password: "$2a$08$rWixXpFPoh.XV1kIxo7iSubp9qV0r0kEQRiHSDXnYzNDKoqr7SeMi",
            name: "Bob",
            twilioPhone: +16156067465        
         })
    })
    .then(() => {
        return models.Message.create({
            contactsText: "Hello",
            watsonText: "Hey",
            contactsPhone: +6158881457,   
            twilioPhone: +16156067465        

            
        })
    .then(()=>{
        return models.Name.create({
            contactsPhone: +6158881457,                        
            name: "MOM",
            picture: "",
        })
    })
    .then(() => {
        process.exit();
    });
    })