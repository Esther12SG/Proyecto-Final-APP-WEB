const express = require('express');
const router = express.Router();

const { obtenerAmigos } = require('../controladores/myFriends.controller');

router.get('/', obtenerAmigos);

module.exports = router;