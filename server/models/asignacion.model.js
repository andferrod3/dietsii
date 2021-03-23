const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const asignacionSchema = new mongoose.Schema({
    dateTime: { type: Date, required: true },
    description: { type: String, required: true },
    professional: { type: Schema.ObjectId, ref: "user" },
    pacient: { type: Schema.ObjectId, ref: "user" }
});
module.exports = Asignacion = mongoose.model("asignacion", asignacionSchema);