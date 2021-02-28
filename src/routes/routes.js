const express = require('express');
const FinalizarCompra = require('../controllers/FinalizarCompraController');
const CidadesEstados = require('../controllers/CidadesEstadoController')
const router = express.Router();


router.get('/home',FinalizarCompra.home) 
router.post('/finalizar-compra',FinalizarCompra.finalizarCompra);
router.get('/estado/:siglaEstado/cidades',CidadesEstados.obterCidade)


module.exports = router;