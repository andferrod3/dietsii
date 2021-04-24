const { user } = require('../bd')
const Asignacion = require('../models/asignacion.model')

createAsignacion = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar una asignación',
        })
    }

    const asignacion = new Asignacion(body)

    if (!asignacion) {
        return res.status(400).json({ success: false, error: err })
    }

    asignacion
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: asignacion._id,
                message: 'Asignación creada',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Asignación no creada',
            })
        })
}

aceptarAsignacion = async (req, res) => {

    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Asignacion.findOne({ _id: req.params.id }, (err, asignacion) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Asignación no encontrada',
            })
        }
        asignacion.isAccepted = true
        asignacion.professional = body.professional
        asignacion
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: asignacion._id,
                    message: 'Asignación actualizada',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Asignación no actualizada',
                })
            })
    })
}


deleteAsignacion = async (req, res) => {
    await Asignacion.findOneAndDelete({ _id: req.params.id }, (err, asignacion) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!asignacion) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }

        return res.status(200).json({ success: true, data: asignacion })
    }).catch(err => console.log(err))
}

getAsignacionById = async (req, res) => {
    await Asignacion.findOne({ _id: req.params.id }, (err, asignacion) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!asignacion) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }
        return res.status(200).json({ success: true, data: asignacion })
    }).catch(err => console.log(err))
}

getAsignaciones = async (req, res) => {
    await Asignacion.find({}, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

getAsignacionesToProfessional = async (req, res) => {
    await Asignacion.find({ professional: req.params.id }, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

getAsignacionesNotAcceptedNutricionist = async (req, res) => {
    await Asignacion.find({ isAccepted:'false', type:'Nutricionista' }, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

getAsignacionesNotAcceptedEntrenador = async (req, res) => {
    await Asignacion.find({ isAccepted:'false', type:'Entrenador' }, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(404)
                .json({ success: false, error: `Asignación no encontrada` })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

getAsignacionNutricionistaToPaciente = async (req, res) => {
    await Asignacion.find({ pacient: req.params.id, type: 'Nutricionista' }, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(200)
                .json({ success: true, data:asignaciones })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

getAsignacionEntrenadorToPaciente = async (req, res) => {
    await Asignacion.find({ pacient: req.params.id, type: 'Entrenador' }, (err, asignaciones) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!asignaciones.length) {
            return res
                .status(200)
                .json({ success: true, data:asignaciones })
        }
        User.populate(asignaciones, {path: "pacient"},function(err, asignaciones){
            return res.status(200).json({ success: true, data: asignaciones })
                    }); 

    }).catch(err => console.log(err))
}

module.exports = {
    createAsignacion,
    deleteAsignacion,
    aceptarAsignacion,
    getAsignaciones,
    getAsignacionById,
    getAsignacionesToProfessional,
    getAsignacionesNotAcceptedNutricionist,
    getAsignacionesNotAcceptedEntrenador,
    getAsignacionEntrenadorToPaciente,
    getAsignacionNutricionistaToPaciente,
}