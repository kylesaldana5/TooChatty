"use strict"

module.exports.newName = (req, res, next) => {
    console.log('response obj', req.body);

    let { Name } = req.app.get("models");
    Name.update(
        { name: req.body.first_name },
        { where: { phone: req.body.phone } }
    )

}

module.exports.getName = (req, res, next) =>{
    let { Name } = req.app.get('models');
    Name.findAll({})
        .then((numbers) => {
        res.status(200).json(numbers)
    })
}
