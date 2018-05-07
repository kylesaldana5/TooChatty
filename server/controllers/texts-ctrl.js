"use strict";

module.exports.getCurrentText = (req, res, next) =>{
    let { Message } = req.app.get("models");
    Message.findAll()
    .then((data)=>{
        res.status(200).json(data)
    })
}
    