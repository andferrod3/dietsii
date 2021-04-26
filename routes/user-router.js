
const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()


router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)
router.get('/users/pacientes', UserCtrl.getAllPacientes)
router.get('/users/nutricionistas', UserCtrl.getAllNutricionistas)
router.get('/users/entrenadores', UserCtrl.getAllEntrenadores)

module.exports = router