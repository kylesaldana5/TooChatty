"use strict"

module.exports.getNonDuplicates = (req, res, next) => {
    const {sequelize} = req.app.get("models");
    sequelize.query('SELECT DISTINCT "contactsPhone" FROM messages', { type: sequelize.QueryTypes.SELECT })
    .then((numbers)=>{
        res.status(200).json(numbers)        
    })
}