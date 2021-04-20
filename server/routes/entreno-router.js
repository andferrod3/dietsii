
const express = require('express')

const EntrenoCtrl = require('../controllers/entreno-ctrl')

const router = express.Router()

router.post('/entreno', EntrenoCtrl.createEntreno)
router.put('/entreno/:id', EntrenoCtrl.updateEntreno)
router.delete('/entreno/:id', EntrenoCtrl.deleteEntreno)
router.get('/entreno/:id', EntrenoCtrl.getEntrenoById)
router.get('/entrenos', EntrenoCtrl.getEntrenos)


module.exports = router