const Booking = require("../model/Booking")

const router = require("express").Router()

router.get('/', async (req, res) => {
    try {
        const data = await Booking.find()
        res.json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await Booking.findById(req.params.id)
    } catch (error) {
        console.log(error)           
    }
})

router.post('/add', async (req, res) => {
    try {
        const data = await Booking.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Booking.findByIdAndDelete(req.params.id)
        res,json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await Booking.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)           
    } 
})

module.exports = router