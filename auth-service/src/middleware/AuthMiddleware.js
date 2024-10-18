const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']
  if (!token) {
    return res
      .status(401)
      .send({ message: 'Access Denied. No token provided.' })
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], secretKey)
    req.user = decoded
    next()
  } catch (ex) {
    res.status(400).send({ message: 'Invalid token' })
  }
}

module.exports = authMiddleware
