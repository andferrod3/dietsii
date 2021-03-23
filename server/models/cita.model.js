const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const citaSchema = new mongoose.Schema({
    dateTime: { type: Date, required: true },
    sessionName: { type: String, required: true },
    professional: { type: Schema.ObjectId, ref: "user" },
    pacient: { type: Schema.ObjectId, ref: "user" }
});
module.exports = Cita = mongoose.model("cita", citaSchema);