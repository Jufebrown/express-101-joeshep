const {Router} = require('express')
const path = require('path')

const animalRouter = Router()

animalRouter.get(`/monkeys`, (req, res, next) => {
  console.log('Fetching some monkeys')
  console.log(`This ran at ${req.requestTime}`)
  res.sendFile(path.join(__dirname, '../public', 'monkeys.html'))
})

animalRouter.get(`/chickens`, (req, res, next) => {
  console.log('looking for chickens')
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
})

animalRouter.post('/chickens', (req, res, next) => {
  console.log('Posting some chickens')
  res.send('Nothing here but us chickens')
})


module.exports = animalRouter
