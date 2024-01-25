const Client = require("../model/Client")


const router = require("express").Router()

router.get('/', async (req, res) => {
    try {
        const data = await Client.find()
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
})

// Find client by email from req.body
router.post('/Email', async (req, res) => {
    try {
        console.log(req.body)
      const { Email } = req.body;
      const data = await Client.findOne({ Email });
      if (!data) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

router.get('/user/:id', async (req, res) => {
    try {
        const data= await Client.findById(req.params.id)
    } catch (error) {
        console.log(error)   
    }
})

router.post('/add', async (req,res) => {
    try {
        const data = await Client.create(req.body)
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const data = await Client.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
} )

router.put('/:id', async (req, res) => {
    try {
        const data = await Client.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)   
    }
})

module.exports = router