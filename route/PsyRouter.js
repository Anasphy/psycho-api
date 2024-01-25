const Psy = require("../model/Psy")

const router = require("express").Router()

router.get('/', async (req, res) => {
    try {
        const data = await Psy.find()
        res.json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await Psy.findById(req.params.id)
    } catch (error) {
        console.log(error)           
    }
})

router.post('/add', async (req, res) => {
    try {
        const data = await Psy.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Psy.findByIdAndDelete(req.params.id)
        res,json(data)
    } catch (error) {
        console.log(error)           
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await Psy.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)           
    } 
})

module.exports = router