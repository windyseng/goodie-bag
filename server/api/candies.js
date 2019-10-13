const Candy = require('../db/models/Candy')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
   const candies = await Candy.findAll()
    res.status(200).json(candies);
  } catch (error){
    next(error)
  }
})

module.exports = router;
