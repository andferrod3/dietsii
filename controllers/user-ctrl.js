const User = require('../models/user.model')



getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `Usuario no encontrado` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Usuario no encontrado` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

getAllPacientes = async (req, res) => {
    await User.find({ role:'Paciente'}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Usuario no encontrado` })
        }
      
            return res.status(200).json({ success: true, data: users })
                 

    }).catch(err => console.log(err))
}

getAllNutricionistas = async (req, res) => {
    await User.find({ role:'Nutricionista'}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Usuario no encontrado` })
        }
      
            return res.status(200).json({ success: true, data: users })
                 

    }).catch(err => console.log(err))
}

getAllEntrenadores = async (req, res) => {
    await User.find({ role:'Entrenador'}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Usuario no encontrado` })
        }
      
            return res.status(200).json({ success: true, data: users })
                 

    }).catch(err => console.log(err))
}

module.exports = {

    getUsers,
    getUserById,
    getAllPacientes,
    getAllNutricionistas,
    getAllEntrenadores,
}