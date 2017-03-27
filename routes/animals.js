const {Router} = require('express')
const path = require('path')
const animal = require('../controllers/animalCtrl')
const {knew, submit} = require('../controllers/animalCtrl')

const animalRouter = Router()

animalRouter.get(`/monkeys`, (req, res, next) => {
  console.log('Fetching some monkeys')
  console.log(`This ran at ${req.requestTime}`)
  animal.knew(req,res, null)
})

animalRouter.get(`/chickens`, knew)

animalRouter.post('/chickens', submit)


module.exports = animalRouter
