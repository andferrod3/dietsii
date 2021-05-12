const { user } = require('../bd')
const Registroe = require('../models/registroe.model')
const { entreno } = require('../bd')
const notify = require('a1-notify')
createRegistroe = async (req, res) => {
    const body = req.body

    let dateTime = body.dateTime
    let dificultad = body.dificultad
    let professional = body.professional
    let pacient = body.pacient
    let lunes = body.lunes
    let martes = body.martes
    let miercoles = body.miercoles
    let jueves = body.jueves
    let viernes = body.viernes
    let sabado = body.sabado
    let domingo = body.domingo
   
    if (!dateTime || !dificultad || !professional || !pacient || !lunes || !martes || !miercoles || !jueves || !viernes  || !sabado || !domingo  ){
        return res.status(400).json({ msg: "Faltan campos por rellenar" });
        }

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un registro',
        })
    }

    const registroe = new Registroe(body)

    if (!registroe) {
        return res.status(400).json({ success: false, error: err })
    }

    const pacientCompleto = await User.findOne({_id: pacient})
    const cuerpoEmail = 'Hola '+ pacientCompleto.name+',' +
    '\nya tienes disponible en el sistema un nuevo registro de entrenamiento. Accede a verlo desde el apartado Registros deportivos'+
    '\nUn saludo,'+
    '\nEquipo Dietsii.';

    registroe
        .save()
        .then((result) => {
            notify.email(pacientCompleto.email, 'Nuevo registro deportivo', cuerpoEmail)
            return res.status(201).json({
                success: true,
                id: registroe._id,
                message: 'Registro creado',
                result: {
                    _id: result._id,
                    dateTime:result.dateTime, 
                    dificultad:result.dificultad, 
                    professional:result.professional,
                    pacient:result.pacient,
                    lunes:result.lunes,
                    martes:result.martes,
                    miercoles:result.miercoles,
                    jueves:result.jueves,
                    viernes:result.viernes,
                    sabado:result.sabado,
                    domingo:result.domingo,
                }
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Registro no creado',
            })
        })
}

updateRegistroe = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Registroe.findOne({ _id: req.params.id }, (err, registroe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Registro no encontrado',
            })
        }
        registroe.dateTime = body.dateTime
        registroe.dificultad = body.dificultad
        registroe.professional = body.professional
        registroe.pacient = body.pacient
        registroe.lunes = body.lunes
        registroe.martes = body.martes
        registroe.miercoles = body.miercoles
        registroe.jueves = body.jueves
        registroe.viernes = body.viernes
        registroe.sabado = body.sabado
        registroe.domingo = body.domingo
       

        registroe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: registroe._id,
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

deleteRegistroe = async (req, res) => {
    await Registroe.findOneAndDelete({ _id: req.params.id }, (err, registroe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registroe) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }

        return res.status(200).json({ success: true, data: registroe })
    }).catch(err => console.log(err))
}

getRegistroeById = async (req, res) => {
    await Registroe.findOne({ _id: req.params.id }, (err, registroe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!registroe) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }

        Entreno.populate(registroe, {path: "lunes"},function(err, registroe){
            Entreno.populate(registroe, {path: "martes"},function(err, registroe){
                Entreno.populate(registroe, {path: "miercoles"},function(err, registroe){
                    Entreno.populate(registroe, {path: "jueves"},function(err, registroe){
                        Entreno.populate(registroe, {path: "viernes"},function(err, registroe){
                            Entreno.populate(registroe, {path: "sabado"},function(err, registroe){
                                Entreno.populate(registroe, {path: "domingo"},function(err, registroe){
                                    return res.status(200).json({ success: true, data: registroe })
                                })
                            })
                        })
                    })
                })
            })
        })
    }).catch(err => console.log(err))
}

getRegistroes = async (req, res) => {
    await Registroe.find({}, (err, registroes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!registroes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }
        User.populate(registroes, {path: "pacient"},function(err, registroes){
            return res.status(200).json({ success: true, data: registroes })
                    }); 

    }).catch(err => console.log(err))
}

getRegistroesToPacient = async (req, res) => {
    await Registroe.find({ pacient: req.params.id }, (err, registroes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!registroes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Registro no encontrado` })
        }
        User.populate(registroes, {path: "pacient"},function(err, registroes){
            return res.status(200).json({ success: true, data: registroes })
                    }); 

    }).catch(err => console.log(err))
}

module.exports = {
    createRegistroe,
    updateRegistroe,
    deleteRegistroe,
    getRegistroes,
    getRegistroeById,
    getRegistroesToPacient,
}