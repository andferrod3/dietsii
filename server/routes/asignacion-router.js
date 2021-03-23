
const express = require('express')

const AsignacionCtrl = require('../controllers/asignacion-ctrl')

const router = express.Router()

router.post('/asignacion', AsignacionCtrl.createAsignacion)
router.delete('/asignacion/:id', AsignacionCtrl.deleteAsignacion)
router.get('/asignacion/:id', AsignacionCtrl.getAsignacionById)
router.get('/asignaciones', AsignacionCtrl.getAsignaciones)
router.get('/asignaciones/:id', AsignacionCtrl.getAsignacionesToProfessional)

module.exports = router