const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const fichaSchema = new mongoose.Schema({
    dateTime: { type: Date, required: true },
    age: { type: Number, required: true },
    sex: {type: String, required: true},
    altura: { type: Number},
    peso: { type: Number },
    cintura: { type: Number},
    cadera: { type: Number },
    pecho: { type: Number},
    muslo: { type: Number },
    brazo: { type: Number },
    alergias: {type: String},
    restricciones: {type: String},
    afecciones: {type: String},
    pacient: { type: Schema.ObjectId, ref: "user" },
});
module.exports = Ficha = mongoose.model("ficha", fichaSchema);