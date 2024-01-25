const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    Doctor: {
        type: String,
        required: true 
    },
    Client: {
        type: String,
        required: true 
    },
    Date: {
        type: String,
        required: true 
    },
    Session: 
    {
        type: String,
        required: true 
    },
    Hour: 
    {
        type: String,
        required: true 
    },
    Status:{
        type: String,
        required: true,
        default: "Available"
    }
})

const Booking = mongoose.model('Booking', BookingSchema)

module.exports = Booking