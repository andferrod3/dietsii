const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const asignacionSchema = new mongoose.Schema({
    dateTime: { type: Date },
    description: { type: String, required: true },
    professional: { type: Schema.ObjectId, ref: "user" },
    pacient: { type: Schema.ObjectId, ref: "user" },
    isAccepted: {type: Boolean, required: true},
    type: { type: String, required: true },
});
module.exports = Asignacion = mongoose.model("asignacion", asignacionSchema);