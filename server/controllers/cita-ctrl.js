const { user } = require('../bd')
const Cita = require('../models/cita.model')
const User = require('../models/user.model')
const notify = require('a1-notify')
createCita = async (req, res) => {
    const body = req.body
    let sessionName = body.sessionName
    let dateTime = body.dateTime
    let professional = body.professional
    let pacient = body.pacient
    
    if (!sessionName || !dateTime || !pacient || !professional ){
        return res.status(400).json({ msg: "Faltan campos por rellenar" });
        }
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar una cita',
        })
    }

    const cita = new Cita(body)

    if (!cita) {
        return res.status(400).json({ success: false, error: err })
    }

 
    const pacientCompleto = await User.findOne({_id: pacient})
    const cuerpoEmail = 'Hola '+ pacientCompleto.name+',' +
    '\nse ha creado en el sistema una nueva cita con un profesional.' +
    '\nFecha y hora: '+ dateTime+
    '\nNombre de la sesión: '+sessionName+
    '\nRecuerda que el nombre de la sesión es el que debe introducir para acceder a la cita con el profesional.'+
    '\nUn saludo,'+
    '\nEquipo Dietsii.';
    cita
        .save()
        .then(() => {
            notify.email(pacientCompleto.email, 'Confirmación de sesión de cita en Dietsii', cuerpoEmail)
            return res.status(201).json({
                success: true,
                id: cita._id,
                message: 'Cita creada',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cita no creada',
            })
        })
}

updateCita = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Cita.findOne({ _id: req.params.id }, (err, cita) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Cita no encontrada',
            })
        }
        cita.sessionName = body.sessionName
        cita.dateTime = body.dateTime
        cita.professional = body.professional
        cita.pacient = body.pacient
        cita
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: cita._id,
                    message: 'Cita actualizada',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Cita no actualizada',
                })
            })
    })
}

deleteCita = async (req, res) => {
    await Cita.findOneAndDelete({ _id: req.params.id }, (err, cita) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cita) {
            return res
                .status(404)
                .json({ success: false, error: `Cita no encontrada` })
        }

        return res.status(200).json({ success: true, data: cita })
    }).catch(err => console.log(err))
}

getCitaById = async (req, res) => {
    await Cita.findOne({ _id: req.params.id }, (err, cita) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cita) {
            return res
                .status(404)
                .json({ success: false, error: `Cita no encontrada` })
        }
        return res.status(200).json({ success: true, data: cita })
    }).catch(err => console.log(err))
}

getCitas = async (req, res) => {
    await Cita.find({}, (err, citas) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!citas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Cita no encontrada` })
        }
        User.populate(citas, {path: "pacient"},function(err, citas){
            return res.status(200).json({ success: true, data: citas })
                    }); 

    }).catch(err => console.log(err))
}

getCitasToProfessional = async (req, res) => {
    await Cita.find({ professional: req.params.id }, (err, citas) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!citas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Cita no encontrada` })
        }
        User.populate(citas, {path: "pacient"},function(err, citas){
            return res.status(200).json({ success: true, data: citas })
                    }); 

    }).catch(err => console.log(err))
}

module.exports = {
    createCita,
    updateCita,
    deleteCita,
    getCitas,
    getCitaById,
    getCitasToProfessional,
}