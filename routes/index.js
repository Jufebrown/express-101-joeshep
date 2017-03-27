const {Router} = require('express')
// const path = require('path')
const router = Router()

router.use(require('./animals'))
router.use(require('./games'))

module.exports = router
