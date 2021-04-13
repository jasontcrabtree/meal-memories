const db = require('../db');

const getAllUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows);
  });
};

// GET(read) A SINGLE USER BY ID
const getUserById = (request, response) => {
  const id = parseInt(request.params.id, 10);

  db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error, 'Broken');
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
