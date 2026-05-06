const { Client } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env'), override: true });

const escucharCambiosMyFriends = (io) => {
  const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'proyecto_final_web',
    password: '1234',
    port: 5432
  });

  client.connect()
    .then(() => {
      console.log('Escuchando eventos de PostgreSQL en my_friends_channel');
      return client.query('LISTEN my_friends_channel');
    })
    .catch((error) => {
      console.error('Error al escuchar PostgreSQL:', error.message);
    });

  client.on('notification', (msg) => {
    const data = JSON.parse(msg.payload);
    console.log('Cambio detectado en PostgreSQL:', data);
    io.emit('my_friends_update', data);
  });
};

module.exports = escucharCambiosMyFriends;