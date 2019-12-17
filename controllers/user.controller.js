const db = require('../db');

const userLogin = async (req, res, next) => {
  try {
    
  } catch (err) {
    res.status(500).json({ error: { message: 'Something is wrong!' } })
  }
}

module.exports = {
  userLogin,
}