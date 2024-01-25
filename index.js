const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use('/Client', require('./route/ClientRouter'))
app.use('/Offer', require('./route/OfferRouter'))
app.use('/Booking', require('./route/BookingRouter'))
app.use('/Psy', require('./route/PsyRouter'))
app.use('/Psychologist', require('./route/PsychologistRouter'))



mongoose.connect("mongodb+srv://anas:gomycode@cluster0.qmcljkp.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Db Connected"))

app.listen(4000, ()  => {
    console.log('Server is running')
})
