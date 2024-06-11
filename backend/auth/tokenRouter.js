const express = require('express')
const Auth = require('./tokenService')

const router = express.Router()

router.post('/register', async (req, res) => {
  const [status, body] = await Auth.register(req.body)
  setTimeout(() => {
    res.status(status).json(body)
  }, 1500)
})

router.post('/login', async (req, res) => {
  const [status, body] = await Auth.login(req.body)
  setTimeout(() => {
    res.status(status).json(body)
  }, 1500)
})

router.get('/verify', async (req, res) => {
  const [status, body] = await Auth.verify(req.headers.authorization)
  setTimeout(() => {
    res.status(status).json(body)
  }, 1500)
})

module.exports = router
