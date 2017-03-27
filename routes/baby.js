const {Router} = require('express')
const path = require('path')

const babyRouter = Router()

babyRouter.get(`/baby`, (req, res, next) => {
  console.log('Fetching a baby')
  console.log(`This ran at ${req.requestTime}`)
  res.sendFile(path.join(__dirname, '../public', 'baby.html'))
})


module.exports = babyRouter
