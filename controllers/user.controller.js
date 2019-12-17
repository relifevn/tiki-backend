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

const getListUsers = async (req, res, next) => {
  try {
    db.query('SELECT * FROM User', (err, users) => {
      if (err) throw err;
      console.log(users);
      res.json(users.map(user => {
        const { id, type, username, email } = user
        return { id, type, username, email }
      }))
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: { message: 'Something is wrong!' } })
  }
}

module.exports = {
  userLogin,
  getListUsers,
}