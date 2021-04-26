
const express = require('express')

const RegistronCtrl = require('../controllers/registron-ctrl')

const router = express.Router()

router.post('/registron', RegistronCtrl.createRegistron)
router.put('/registron/:id', RegistronCtrl.updateRegistron)
router.delete('/registron/:id', RegistronCtrl.deleteRegistron)
router.get('/registron/:id', RegistronCtrl.getRegistronById)
router.get('/registrons', RegistronCtrl.getRegistrons)
router.get('/registrons/:id', RegistronCtrl.getRegistronsToPacient)

module.exports = router