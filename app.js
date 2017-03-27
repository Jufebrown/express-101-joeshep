`use strict`

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//routes modules
const routes = require(`./routes/`)
// const animalRoutes = require('./routes/animals')
// const gameRoutes = require('./routes/games')

//middleware - gets three args
const requestTime = (req, res, next) => {
  req.requestedTime = new Date()
  next()
}

//routes and routing
app.use(express.static(__dirname + '/public'))

app.use(requestTime)

// app.use(animalRoutes)
// app.use(gameRoutes)
app.use(routes)

app.use((req, res) => {
  res.send("Where do you think you're going? We only have monkeys and chickens here")
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
