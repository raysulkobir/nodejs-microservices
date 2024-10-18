const axios = require('axios');

//TODO Middleware to check if the user is authenticated
const authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({ error: 'Unauthorized access' });
  }

  //TODO Extract the token part after "Bearer"
  const token = authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).send({ error: 'No token provided' });
  }

  try {
    //TODO Send token to auth-service via Authorization header
    const response = await axios.post(
      `http://localhost:5001/auth/verifyToken`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.valid) {
      //TODO Token is valid, proceed to the next middleware or route handler
      next();
    } else {
      res.status(403).send({ error: 'Forbidden: Invalid token' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error during authentication' });
  }
};

module.exports = authenticate;
