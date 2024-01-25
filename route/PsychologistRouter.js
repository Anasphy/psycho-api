const Psychologist = require("../model/Psychologist")

const router = require("express").Router()

router.get('/', async (req, res) => {
    try {
      const data = await Psychologist.find();
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  });
  router.post('/Email', async (req, res) => {
    try {
      const { Email } = req.body;
      const data = await Psychologist.findOne({ Email });
      if (!data) {
        return res.status(404).json({ error: 'Psychologist not found' });
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  router.get('/user/:id', async (req, res) => {
    try {
      const data = await Psychologist.findById(req.params.id);
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  });
  
  router.post('/add', async (req, res) => {
    try {
      const data = await Psychologist.create(req.body);
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const data = await Psychologist.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      console.log(error)
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const data = await Psychologist.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      console.log(error)
    }
  });

module.exports = router 