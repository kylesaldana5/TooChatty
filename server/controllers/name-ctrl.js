"use strict"

module.exports.newName = (req, res, next) => {
    console.log('response obj', req.body);

    let { Name } = req.app.get("models");
    Name.update(
        { first_name: req.body.first_name, last_name: req.body.last_name, company: req.body.company, email: req.body.email },
        { where: { phone: req.body.phone} }
    )
    .then((name)=>{
        res.status(200).json(name)
    })

}

module.exports.getName = (req, res, next) =>{
    let { Name } = req.app.get('models');
    Name.findAll({})
        .then((numbers) => {
        res.status(200).json(numbers)
    })
}
