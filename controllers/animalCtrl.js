`use strict`

const {join} = require('path')
const chickData = require('../models/chicken')

const chickenNames = chickData.map((chicken) => chicken.name)

module.exports.knew = (req, res, err) => {
  res.sendFile(join(__dirname, `../public`, `${req.url}.html`))
}

module.exports.submit = (req, res, next) => {
  console.log(`submitting a form for ${req.url}`)
  res.send(`No chickens found. KFC got here first and served up ${chickenNames.join(' and ')}`)
}
