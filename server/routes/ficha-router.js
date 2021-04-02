
const express = require('express')

const FichaCtrl = require('../controllers/ficha-ctrl')

const router = express.Router()

router.post('/ficha', FichaCtrl.createFicha)
router.put('/ficha/:id', FichaCtrl.updateFicha)
router.delete('/ficha/:id', FichaCtrl.deleteFicha)
router.get('/ficha/:id', FichaCtrl.getFichaById)
router.get('/fichas', FichaCtrl.getFichas)
router.get('/fichas/:id', FichaCtrl.getFichasToPacient)

module.exports = router