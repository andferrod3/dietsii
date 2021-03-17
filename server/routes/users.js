const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");
// Register
router.post("/register", async (req, res) => {
try {
let { email, password, passwordCheck, name, surname, phone, address, birth } = req.body;
// validate
if (!email || !password || !passwordCheck || !name || !surname || !phone || !address || !birth )
return res.status(400).json({ msg: "Faltan campos por rellenar" });
if (password.length < 5)
return res
.status(400)
.json({ msg: "La contraseña debe ser de al menos 5 caracteres" });
if (password !== passwordCheck)
return res
.status(400)
.json({ msg: "Las contraseñas deben coincidir" });
const existingUser = await User.findOne({ email: email });
if (existingUser)
return res
.status(400)
.json({ msg: "Ese email ya se encuentra en uso" });

const salt = await bcrypt.genSalt();
const passwordHash = await bcrypt.hash(password, salt);
const newUser = new User({
email,
password: passwordHash,
name,
surname,
phone,
address,
birth,
});
const savedUser = await newUser.save();
res.json(savedUser);
} catch (err) {
res.status(500).json({ error: err.message });
}
});
// Login
router.post("/login", async (req, res) => {
try {
const { email, password } = req.body;
// validate
if (!email || !password)
return res.status(400).json({ msg: "Faltan campos por rellenar" });
const user = await User.findOne({ email: email });
if (!user)
return res
.status(400)
.json({ msg: "No existe ninguna cuenta con dicho email" });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: "Credenciales inválidos" });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
res.json({
token,
user: {
id: user._id,
name: user.name,
},
});
} catch (err) {
res.status(500).json({ error: err.message });
}
});
// Delete
router.delete("/delete", auth, async (req, res) => {
try {
const deletedUser = await User.findByIdAndDelete(req.user);
res.json(deletedUser);
} catch (err) {
res.status(500).json({ error: err.message });
}
});
// Check if token is valid
router.post("/tokenIsValid", async (req, res) => {
try {
const token = req.header("x-auth-token");
if (!token) return res.json(false);
const verified = jwt.verify(token, process.env.JWT_SECRET);
if (!verified) return res.json(false);
const user = await User.findById(verified.id);
if (!user) return res.json(false);
return res.json(true);
} catch (err) {
res.status(500).json({ error: err.message });
}
});
router.get("/", auth, async (req, res) => {
const user = await User.findById(req.user);
res.json({
name: user.name,
id: user._id,
});
});
module.exports = router;