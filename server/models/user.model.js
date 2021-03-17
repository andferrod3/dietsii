const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true, minlength: 5 },
    birth: { type: Date, required: true },
});
module.exports = User = mongoose.model("user", userSchema);