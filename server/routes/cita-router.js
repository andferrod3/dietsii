
const express = require('express')

const CitaCtrl = require('../controllers/cita-ctrl')

const router = express.Router()

router.post('/cita', CitaCtrl.createCita)
router.put('/cita/:id', CitaCtrl.updateCita)
router.delete('/cita/:id', CitaCtrl.deleteCita)
router.get('/cita/:id', CitaCtrl.getCitaById)
router.get('/citas', CitaCtrl.getCitas)
router.get('/citas/:id', CitaCtrl.getCitasToProfessional)

module.exports = router