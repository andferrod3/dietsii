const { user } = require('../bd')
const Menu = require('../models/menu.model')

createMenu = (req, res) => {
    const body = req.body

    let name = body.name
    let hidratos = body.hidratos
    let calorias = body.calorias
    let proteinas = body.proteinas
    let grasas = body.grasas
  
    if (!name || !hidratos || !calorias || !proteinas || !grasas ){
        return res.status(400).json({ msg: "Faltan campos por rellenar" });
        }

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un menu',
        })
    }

    const menu = new Menu(body)

    if (!menu) {
        return res.status(400).json({ success: false, error: err })
    }

    menu
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: menu._id,
                message: 'Menu creado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Menu no creado',
            })
        })
}

updateMenu = async (req, res) => {
    const menu = req.menu

    if (!menu) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Menu.findOne({ _id: req.params.id }, (err, menu) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Menu no encontrado',
            })
        }
        menu.name = body.name
        menu.calorias = body.calorias
        menu.hidratos = body.hidratos
        menu.proteinas = body.proteinas
        menu.grasas = body.grasas
       
        menu
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: menu._id,
                    message: 'Menu actualizado',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Menu no actualizado',
                })
            })
    })
}

deleteMenu = async (req, res) => {
    await Menu.findOneAndDelete({ _id: req.params.id }, (err, menu) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!menu) {
            return res
                .status(404)
                .json({ success: false, error: `Menu no encontrado` })
        }

        return res.status(200).json({ success: true, data: menu })
    }).catch(err => console.log(err))
}

getMenuById = async (req, res) => {
    await Menu.findOne({ _id: req.params.id }, (err, menu) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!menu) {
            return res
                .status(404)
                .json({ success: false, error: `Menu no encontrado` })
        }
        return res.status(200).json({ success: true, data: menu })
    }).catch(err => console.log(err))
}

getMenus = async (req, res) => {
    await Menu.find({}, (err, menus) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!menus.length) {
            return res
                .status(404)
                .json({ success: false, error: `Menu no encontrado` })
        }
      
            return res.status(200).json({ success: true, data: menus })
                  

    }).catch(err => console.log(err))
}



module.exports = {
    createMenu,
    updateMenu,
    deleteMenu,
    getMenus,
    getMenuById,
}