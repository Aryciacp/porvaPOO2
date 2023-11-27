const express = require('express');
const usuarioRoutes = require('./usuario');
const leilaoRoutes = require('./leilao');
const lanceRoutes = require('./lance');

const router = express.Router();

router.use('/usuarios', usuarioRoutes);
router.use('/leiloes', leilaoRoutes);
router.use('/lances', lanceRoutes);

module.exports = router;