const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const registroeSchema = new mongoose.Schema({
    dateTime: { type: Date },
    dificultad: { type: String },
    professional: { type: Schema.ObjectId, ref: "user" },
    pacient: { type: Schema.ObjectId, ref: "user" },
    lunes: { type: Schema.ObjectId, ref: "entreno" },
    martes: { type: Schema.ObjectId, ref: "entreno" },
    miercoles: { type: Schema.ObjectId, ref: "entreno" },
    jueves: { type: Schema.ObjectId, ref: "entreno" },
    viernes: { type: Schema.ObjectId, ref: "entreno" },
    sabado: { type: Schema.ObjectId, ref: "entreno" },
    domingo: { type: Schema.ObjectId, ref: "entreno" },
   
});
module.exports = Registroe = mongoose.model("registroe", registroeSchema);