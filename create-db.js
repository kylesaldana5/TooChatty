"use strict";

let models = require("./server/models");

models.sequelize
    .sync({ force: true })
    .then((queryInterface)=>{
        return models.User.create({
            first_name: "steve",
            last_name: "b",
            username: "steveyb",
            email: "bmoney@gmail.com",
            password: "$2a$08$rWixXpFPoh.XV1kIxo7iSubp9qV0r0kEQRiHSDXnYzNDKoqr7SeMi",
            twilioPhone: +16152643897        
         })
    })
    .then(() => {
        return models.Message.create({
            contactsText: "Hello",
            watsonText: "Hey",
            contactsPhone: +6158881457,   
            twilioPhone: +16152643897      

            
        })
    .then(()=>{
        return models.Name.create({
            phone: 6158881457,                        
            name: "MOM",
            picture: "",
        })
    })
    .then(() => {
        process.exit();
    });
    })