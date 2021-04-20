const { user } = require('../bd')
const Entreno = require('../models/entreno.model')

createEntreno = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un entreno',
        })
    }

    const entreno = new Entreno(body)

    if (!entreno) {
        return res.status(400).json({ success: false, error: err })
    }

    entreno
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: entreno._id,
                message: 'Entreno creado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Entreno no creado',
            })
        })
}

updateEntreno = async (req, res) => {
    const entreno = req.entreno

    if (!entreno) {
        return res.status(400).json({
            success: false,
            error: 'Debes proporcionar un cuerpo para actualizar',
        })
    }

    Entreno.findOne({ _id: req.params.id }, (err, entreno) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Entreno no encontrado',
            })
        }
        entreno.name = body.name
        entreno.rutina = body.rutina
        entreno.calorias = body.calorias

       
        entreno
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: entreno._id,
                    message: 'Entreno actualizado',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Entreno no actualizado',
                })
            })
    })
}

deleteEntreno = async (req, res) => {
    await Entreno.findOneAndDelete({ _id: req.params.id }, (err, entreno) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!entreno) {
            return res
                .status(404)
                .json({ success: false, error: `Entreno no encontrado` })
        }

        return res.status(200).json({ success: true, data: entreno })
    }).catch(err => console.log(err))
}

getEntrenoById = async (req, res) => {
    await Entreno.findOne({ _id: req.params.id }, (err, entreno) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!entreno) {
            return res
                .status(404)
                .json({ success: false, error: `Entreno no encontrado` })
        }
        return res.status(200).json({ success: true, data: entreno })
    }).catch(err => console.log(err))
}

getEntrenos = async (req, res) => {
    await Entreno.find({}, (err, entrenos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!entrenos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Entreno no encontrado` })
        }
      
            return res.status(200).json({ success: true, data: entrenos })
                  

    }).catch(err => console.log(err))
}



module.exports = {
    createEntreno,
    updateEntreno,
    deleteEntreno,
    getEntrenos,
    getEntrenoById,
}