const mongoose = require("mongoose")

const OfferSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Doctor: {
        type: String,
        required: true
    },
    Speciality: {
        type: String,
        required: true
    }
})

const Offer = mongoose.model('Offer', OfferSchema)

module.exports = Offer