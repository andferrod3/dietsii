
const express = require('express')

const RegistroeCtrl = require('../controllers/registroe-ctrl')

const router = express.Router()

router.post('/registroe', RegistroeCtrl.createRegistroe)
router.put('/registroe/:id', RegistroeCtrl.updateRegistroe)
router.delete('/registroe/:id', RegistroeCtrl.deleteRegistroe)
router.get('/registroe/:id', RegistroeCtrl.getRegistroeById)
router.get('/registroes', RegistroeCtrl.getRegistroes)
router.get('/registroes/:id', RegistroeCtrl.getRegistroesToPacient)

module.exports = router