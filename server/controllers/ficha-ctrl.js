const { user } = require('../bd')
const Ficha = require('../models/ficha.model')

createFicha = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar una ficha',
        })
    }

    const ficha = new Ficha(body)

    if (!ficha) {
        return res.status(400).json({ success: false, error: err })
    }

    ficha
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ficha._id,
                message: 'Ficha creada',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Ficha no creada',
            })
        })
}

updateFicha = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Ficha.findOne({ _id: req.params.id }, (err, ficha) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Ficha no encontrada',
            })
        }
        ficha.dateTime = body.dateTime
        ficha.age = body.age
        ficha.sex = body.sex
        ficha.altura = body.altura
        ficha.peso = body.peso
        ficha.cintura = body.cintura
        ficha.cadera = body.cadera
        ficha.pecho = body.pecho
        ficha.muslo = body.muslo
        ficha.brazo = body.brazo
        ficha.alergias = body.alergias
        ficha.restricciones = body.restricciones
        ficha.afecciones = body.afecciones
        ficha.pacient = body.pacient
        ficha
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: ficha._id,
                    message: 'Ficha actualizada',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Ficha no actualizada',
                })
            })
    })
}

deleteFicha = async (req, res) => {
    await Ficha.findOneAndDelete({ _id: req.params.id }, (err, ficha) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!ficha) {
            return res
                .status(404)
                .json({ success: false, error: `Ficha no encontrada` })
        }

        return res.status(200).json({ success: true, data: ficha })
    }).catch(err => console.log(err))
}

getFichaById = async (req, res) => {
    await Ficha.findOne({ _id: req.params.id }, (err, ficha) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!ficha) {
            return res
                .status(404)
                .json({ success: false, error: `Ficha no encontrada` })
        }
        return res.status(200).json({ success: true, data: ficha })
    }).catch(err => console.log(err))
}

getFichas = async (req, res) => {
    await Ficha.find({}, (err, fichas) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!fichas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Ficha no encontrada` })
        }
        User.populate(fichas, {path: "pacient"},function(err, fichas){
            return res.status(200).json({ success: true, data: fichas })
                    }); 

    }).catch(err => console.log(err))
}

getFichasToPacient = async (req, res) => {
    await Ficha.find({ pacient: req.params.id }, (err, fichas) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!fichas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Ficha no encontrada` })
        }
        User.populate(fichas, {path: "pacient"},function(err, fichas){
            return res.status(200).json({ success: true, data: fichas })
                    }); 

    }).catch(err => console.log(err))
}

module.exports = {
    createFicha,
    updateFicha,
    deleteFicha,
    getFichas,
    getFichaById,
    getFichasToPacient,
}