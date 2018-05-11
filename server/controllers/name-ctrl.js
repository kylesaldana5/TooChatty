"use strict"

module.exports.newName = (req, res, next) =>{
    console.log('response obj',req.body );
    
    let { Name } = req.app.get("models");
    Name.update(
        { name: req.body.first_name },
        {where: {phone: req.body.phone}}
    )
 }