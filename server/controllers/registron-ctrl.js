const { user } = require('../bd')
const Registron = require('../models/registron.model')

createRegistron = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un registro',
        })
    }

    const registron = new Registron(body)

    if (!registron) {
        return res.status(400).json({ success: false, error: err })
    }

    registron
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: registron._id,
                message: 'Registro creado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Registro no creado',
            })
        })
}

updateRegistron = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Registron.findOne({ _id: req.params.id }, (err, registron) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Registro no encontrado',
            })
        }
        registron.dateTime = body.dateTime
        registron.estadoAnimo = body.estadoAnimo
        registron.professional = body.professional
        registron.pacient = body.pacient
        registron.desayunoL = body.desayunoL
        registron.mediaL = body.mediaL
        registron.almuerzoL = body.almuerzoL
        registron.meriendaL = body.meriendaL
        registron.cenaL = body.cenaL
        registron.desayunoM = body.desayunoM
        registron.mediaM = body.mediaM
        registron.almuerzoM = body.almuerzoM
        registron.meriendaM = body.meriendaM
        registron.cenaM = body.cenaM
        registron.desayunoX = body.desayunoX
        registron.mediaX = body.mediaX
        registron.almuerzoX = body.almuerzoX
        registron.meriendaX = body.meriendaX
        registron.cenaX = body.cenaX
        registron.desayunoJ = body.desayunoJ
        registron.mediaJ = body.mediaJ
        registron.almuerzoJ = body.almuerzoJ
        registron.meriendaJ = body.meriendaJ
        registron.cenaJ = body.cenaJ
        registron.desayunoV = body.desayunoV
        registron.mediaV = body.mediaV
        registron.almuerzoV = body.almuerzoV
        registron.meriendaV = body.meriendaV
        registron.cenaV = body.cenaV
        registron.desayunoS = body.desayunoS
        registron.mediaS = body.mediaS
        registron.almuerzoS = body.almuerzoS
        registron.meriendaS = body.meriendaS
        registron.cenaS = body.cenaS
        registron.desayunoD = body.desayunoD
        registron.mediaD = body.mediaD
        registron.almuerzoD = body.almuerzoD
        registron.meriendaD = body.meriendaD
        registron.cenaD = body.cenaD

        registron
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: registron._id,
                    message: 'Registro actualizado',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Registro no actualizado',
                })
            })
    })
}

deleteRegistron = async (req, res) => {
    await Registron.findOneAndDelete({ _id: req.params.id }, (err, registron) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registron) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }

        return res.status(200).json({ success: true, data: registron })
    }).catch(err => console.log(err))
}

getRegistronById = async (req, res) => {
    await Registron.findOne({ _id: req.params.id }, (err, registron) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registron) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }
        return res.status(200).json({ success: true, data: registron })
    }).catch(err => console.log(err))
}

getRegistrons = async (req, res) => {
    await Registron.find({}, (err, registrons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!registrons.length) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }
        User.populate(registrons, {path: "pacient"},function(err, registrons){
            return res.status(200).json({ success: true, data: registrons })
                    }); 

    }).catch(err => console.log(err))
}

getRegistronsToPacient = async (req, res) => {
    await Registron.find({ pacient: req.params.id }, (err, registrons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!registrons.length) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }
        User.populate(registrons, {path: "pacient"},function(err, registrons){
            return res.status(200).json({ success: true, data: registrons })
                    }); 

    }).catch(err => console.log(err))
}

module.exports = {
    createRegistron,
    updateRegistron,
    deleteRegistron,
    getRegistrons,
    getRegistronById,
    getRegistronsToPacient,
}