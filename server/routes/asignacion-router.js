
const express = require('express')

const AsignacionCtrl = require('../controllers/asignacion-ctrl')

const router = express.Router()

router.post('/asignacion', AsignacionCtrl.createAsignacion)
router.delete('/asignacion/:id', AsignacionCtrl.deleteAsignacion)
router.put('/asignacion/:id',   AsignacionCtrl.aceptarAsignacion)
router.get('/asignacion/:id', AsignacionCtrl.getAsignacionById)
router.get('/asignaciones', AsignacionCtrl.getAsignaciones)
router.get('/asignaciones/not-accepted', AsignacionCtrl.getAsignacionesNotAcceptedNutricionist)
router.get('/asignaciones/not-accepted-e', AsignacionCtrl.getAsignacionesNotAcceptedEntrenador)
router.get('/asignaciones/:id', AsignacionCtrl.getAsignacionesToProfessional)

module.exports = router