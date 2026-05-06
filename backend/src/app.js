const express = require('express');
const cors = require('cors');

const myFriendsRoutes = require('./rutas/myFriends.routes');

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use('/api/my-friends', myFriendsRoutes);

module.exports = app;