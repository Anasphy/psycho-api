
const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    City: {
        type: String,
    },
    Role:{
        type: String,
        default: "Client"
    },
    Password:{
        type: String
    }
})

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client