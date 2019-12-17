const db = require('../db');

const userLogin = async (req, res, next) => {

  const { username, password } = req.body

  console.log(username, password)

  try {
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: { message: 'Something is wrong!' } })
  }
}

module.exports = {
  userLogin,
}