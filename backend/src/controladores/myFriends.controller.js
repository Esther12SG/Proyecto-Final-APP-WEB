const pool = require('../configuracion/db');

const obtenerAmigos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM my_friends ORDER BY id ASC');

    res.status(200).json({
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener datos de my_friends',
      error: error.message
    });
  }
};

module.exports = {
  obtenerAmigos
};