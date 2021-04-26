
const express = require('express')

const MenuCtrl = require('../controllers/menu-ctrl')

const router = express.Router()

router.post('/menu', MenuCtrl.createMenu)
router.put('/menu/:id', MenuCtrl.updateMenu)
router.delete('/menu/:id', MenuCtrl.deleteMenu)
router.get('/menu/:id', MenuCtrl.getMenuById)
router.get('/menus', MenuCtrl.getMenus)


module.exports = router