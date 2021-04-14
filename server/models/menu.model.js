const mongoose = require("mongoose");



const menuSchema = new mongoose.Schema({
    name: {type: String, required: true},
    calorias: { type: Number, required: true},
    hidratos: { type: Number, required: true },
    proteinas: { type: Number, required: true},
    grasas: { type: Number, required: true },
  
});
module.exports = Menu = mongoose.model("menu", menuSchema);