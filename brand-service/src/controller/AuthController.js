// controllers/authController.js
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const secretKey = process.env.SECRET_KEY // Fix the config issue

// Register user
exports.register = async (req, res) => {
  const { username, password, email, firstName, lastName, phone, dob, gender, role } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .send({ message: 'Username and password are required' })
  }

  try {
    //TODO Check if the user already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).send({ message: 'User already registered' })
    }

    //TODO Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    //TODO Create a new user with the hashed password
    const result = await User.create({
      username,
      email,
      firstName,
      lastName,
      phone,
      dob,
      gender,
      role,
      password: hashedPassword,
    })
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({ status: 'fail', data: err.message })
  }
}

//TODO Login user
exports.login = async (req, res) => {
  const { username, password } = req.body

  try {
    //TODO Check if the user exists
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).send({ message: 'User not registered' })
    }

    //TODO Compare passwords
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).send({ message: 'Invalid password' })
    }

    //TODO Generate JWT token
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: '1h',
    })

    res.send({ token })
  } catch (err) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: err.message })
  }
}
