const mongoose = require("mongoose");



const entrenoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rutina: { type: String, required: true },
    calorias: { type: Number, required: true},

});
module.exports = Entreno = mongoose.model("entreno", entrenoSchema);