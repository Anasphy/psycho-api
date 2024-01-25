const mongoose = require("mongoose")

const PsySchema = new mongoose.Schema({
    Doctor: {
        type: String,
        required: true 
    },
    Client: {
        type: String,
        required: true 
    },
    Session: {
        type: String,
        required: true 
    },
    SessionID:{
        type: String,
        required: true,
    }
})

const Psy = mongoose.model('Psy', PsySchema)

module.exports = Psy