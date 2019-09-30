let credit = require("../models/credits.model")
let DB = require("../config/database")


// Get all users

const getAllCredits = async (req, res) => {

    //open DB
    DB.connect()


    await credit.find().populate('user').exec()
        .then((Response) => {
            res.status(200).send({
                "Users": Response
            })
        })
        .catch((error) => {
            res.status(500).send({
                "error": error.message
            })
        })

    //Close DB
    DB.disconnect()
}

// crear el middelware
const find = (req, res, next) => {

    //open DB
    DB.connect()

    credit.findById(req.body._id)
        .then((Response) => {

            //if null then create

            if (Response !== null) {
                return res.status(500).send({
                    "error": "Credito ya existe"
                })
            } else {
                next()
            }
        })
        .catch((error) => {
            console.log("error", error.message)
            //Close DB
            DB.disconnect()
        })

}

const createCredits = async (req, res) => {
    // Crear nuevo usuario cuando no exista

    //open DB
    DB.connect()

    let newCredit = new credit(req.body)



    await newCredit.save()
        .then((Response) => {
            // send response in Json format
            res.status(201).send({
                "Mensaje": "Esta perfectamente creado",
                "status": 201
            })
        })
        .catch((error) => {
            // send response in Json format
            res.status(400).send({
                "Error": error.message,
                "status": 400
            })
        })
    //Close DB
    DB.disconnect()
}



const deleteCredits = async (req, res) => {

    //open DB
    DB.connect()

    await credit.findById(req.params._id)
        .then(async (creditFound) => {
            //Delete user
            await creditFound.remove()
                .then((creditDelete) => {
                    //The user has been delete
                    res.status(200).send({
                        "message": "Credit delete"
                    })
                })
                .catch((error) => {
                    res.status(500).send({
                        "error": error.message
                    })
                })
        })
        .catch((error) => {
            res.status(500).send({
                "error": error.message
            })
        })

    //Close DB
    DB.disconnect()

    //res.send({"_id": req.params._id})
}


// Update an credit
const updateCredits = async (req, res) => {
    //Open DB
    DB.connect()

    await credit.findById(req.params._id)
    .then(async (creditFound)=>{
        // Way 1
        //User.update(userFound, req.body)
        // Way 2
        //userFound.update(req.body)
        //WAY 3
        let creditToSave = Object.assign(creditFound, req.body)
        await creditToSave.save()

        .then(()=>{
            res.send("Udated")
        })
        .catch(()=>{
            res.send("No")
        })
    })
    .catch(()=>{
        res.send("error")
    })
}


module.exports = {
    getAllCredits,
    createCredits,
    deleteCredits,
    updateCredits,
    find
}