const { user } = require('../bd')
const { menu } = require('../bd')
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
        .then((result) => {
            return res.status(201).json({
                success: true,
                id: registron._id,
                message: 'Registro creado',
                result: {
                    _id: result._id,
                    dateTime:result.dateTime, 
                    estadoAnimo:result.estadoAnimo, 
                    professional:result.professional,
                    pacient:result.pacient,
                    desayunoL:result.desayunoL,
                    mediaL:result.mediaL,
                    almuerzoL:result.almuerzoL,
                    meriendaL:result.meriendaL,
                    cenaL:result.cenaL,
                    desayunoM:result.desayunoM,
                    mediaM:result.mediaM,
                    almuerzoM:result.almuerzoM,
                    meriendaM:result.meriendaM,
                    cenaM:result.cenaM,
                    desayunoX:result.desayunoX,
                    mediaX:result.mediaX,
                    almuerzoX:result.almuerzoX,
                    meriendaX:result.meriendaX,
                    cenaX:result.cenaX,
                    desayunoJ:result.desayunoJ,
                    mediaJ:result.mediaJ,
                    almuerzoJ:result.almuerzoJ,
                    meriendaJ:result.meriendaJ,
                    cenaJ:result.cenaJ,
                    desayunoV:result.desayunoV,
                    mediaV:result.mediaV,
                    almuerzoV:result.almuerzoV,
                    meriendaV:result.meriendaV,
                    cenaV:result.cenaV,
                    desayunoS:result.desayunoS,
                    mediaS:result.mediaS,
                    almuerzoS:result.almuerzoS,
                    meriendaS:result.meriendaS,
                    cenaS:result.cenaS,
                    desayunoD:result.desayunoD,
                    mediaD:result.mediaD,
                    almuerzoD:result.almuerzoD,
                    meriendaD:result.meriendaD,
                    cenaD:result.cenaD,
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
        Menu.populate(registron, {path: "desayunoL"},function(err, registron){
           Menu.populate(registron, {path: "mediaL"},function(err, registron){
                Menu.populate(registron, {path: "almuerzoL"},function(err, registron){
                    Menu.populate(registron, {path: "meriendaL"},function(err, registron){
                        Menu.populate(registron, {path: "cenaL"},function(err, registron){
                            Menu.populate(registron, {path: "desayunoM"},function(err, registron){
                                Menu.populate(registron, {path: "mediaM"},function(err, registron){
                                    Menu.populate(registron, {path: "almuerzoM"},function(err, registron){
                                        Menu.populate(registron, {path: "meriendaM"},function(err, registron){
                                            Menu.populate(registron, {path: "cenaM"},function(err, registron){
                                                Menu.populate(registron, {path: "desayunoX"},function(err, registron){
                                                    Menu.populate(registron, {path: "mediaX"},function(err, registron){
                                                        Menu.populate(registron, {path: "almuerzoX"},function(err, registron){
                                                            Menu.populate(registron, {path: "meriendaX"},function(err, registron){
                                                                Menu.populate(registron, {path: "cenaX"},function(err, registron){
                                                                    Menu.populate(registron, {path: "desayunoJ"},function(err, registron){
                                                                        Menu.populate(registron, {path: "mediaJ"},function(err, registron){
                                                                            Menu.populate(registron, {path: "almuerzoJ"},function(err, registron){
                                                                                Menu.populate(registron, {path: "meriendaJ"},function(err, registron){
                                                                                    Menu.populate(registron, {path: "cenaJ"},function(err, registron){
                                                                                        Menu.populate(registron, {path: "desayunoV"},function(err, registron){
                                                                                            Menu.populate(registron, {path: "mediaV"},function(err, registron){
                                                                                                Menu.populate(registron, {path: "almuerzoV"},function(err, registron){
                                                                                                    Menu.populate(registron, {path: "meriendaV"},function(err, registron){
                                                                                                        Menu.populate(registron, {path: "cenaV"},function(err, registron){
                                                                                                            Menu.populate(registron, {path: "desayunoS"},function(err, registron){
                                                                                                                Menu.populate(registron, {path: "mediaS"},function(err, registron){
                                                                                                                    Menu.populate(registron, {path: "almuerzoS"},function(err, registron){
                                                                                                                        Menu.populate(registron, {path: "meriendaS"},function(err, registron){
                                                                                                                            Menu.populate(registron, {path: "cenaS"},function(err, registron){
                                                                                                                                Menu.populate(registron, {path: "desayunoD"},function(err, registron){
                                                                                                                                    Menu.populate(registron, {path: "mediaD"},function(err, registron){
                                                                                                                                        Menu.populate(registron, {path: "almuerzoD"},function(err, registron){
                                                                                                                                            Menu.populate(registron, {path: "meriendaD"},function(err, registron){
                                                                                                                                                Menu.populate(registron, {path: "cenaD"},function(err, registron){
                                                                                                                                                  
                                                                                                                                                                            return res.status(200).json({ success: true, data: registron })
                                                                                                                                        
                                                                                                                                                            });
                                                                                                                                                        });
                                                                                                                                                    });
                                                                                                                                                });
                                                                                                                                            }); 
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        }); 
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    }); 
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                }); 
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            }); 
                                                        });
                                                    });
                                                });
                                            });
                                        }); 
                                    });
                                });
                            });
                        });
                    }); 

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