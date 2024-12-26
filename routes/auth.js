const express = require('express')
const router = express.Router()
const authenticationUser = require('../middleware/authentication')
const testUser = require('../middleware/testUser')

const rateLimiter = require('express-rate-limit')

const apilimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  masage: {
    msg: 'To many request from this IP,please try gain  after 15 minutes',
  },
})

const { register, login, updateUser } = require('../controllers/auth')
router.post('/register', apilimiter, register)
router.post('/login', apilimiter, login)
router.patch('/updateUser', authenticationUser, testUser, updateUser)

module.exports = router
