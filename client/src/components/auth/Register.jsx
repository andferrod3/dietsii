import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
function Register () {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [passwordCheck, setPasswordCheck] = useState();
const [name, setName] = useState();
const [surname, setSurname] = useState();
const [address, setAddress] = useState();
const [phone, setPhone] = useState();
const [birth, setBirth] = useState();
const [role, setRole] = useState();
const [error, setError] = useState();
const { setUserData } = useContext(UserContext);
const history = useHistory();
const submit = async (e) => {
e.preventDefault();
try{
const newUser = {email, password, passwordCheck, surname, name, address, phone, birth, role};
await axios.post("https://dietsii.herokuapp.com/users/register", newUser);
const loginResponse = await axios.post("https://dietsii.herokuapp.com/users/login", {
email, password, 
});
setUserData({
token: loginResponse.data.token,
user: loginResponse.data.user
});
localStorage.setItem("auth-token", loginResponse.data.token);
history.push("/");
} catch(err) {
err.response.data.msg && setError(err.response.data.msg)
}
};


return (
<div className="register">
    <div class="card">
        <div class="card-title">
<h2>Registro</h2>
</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit}>
<label class="field">Registrarse como: </label>
<select class="select-css" id="role" onChange={e => setRole(e.target.value)} >
            <option id="" value="">---Selecciona uno---</option>
            <option id="role" value="Nutricionista">Nutricionista</option>
            <option id="role" value="Entrenador">Entrenador</option>
            <option id="role" value="Paciente">Paciente</option>
</select>
<label class="field">Nombre: </label>
<input class="introduction" type="text" id="name" onChange={e => setName(e.target.value)}/>
<label class="field">Apellidos: </label>
<input class="introduction" type="text" id="surname" onChange={e => setSurname(e.target.value)}/>
<label class="field">Dirección: </label>
<input class="introduction" type="text" id="address" onChange={e => setAddress(e.target.value)}/>
<label class="field">Fecha nacimiento: </label>
<input class="introduction" type="date" id="birth" onChange={e => setBirth(e.target.value)}/>
<label class="field">Teléfono: </label>
<input class="introduction" type="text" id="phone" onChange={e => setPhone(e.target.value)}/>
<label class="field">Email: </label>
<input class="introduction" type="email" id="email" onChange={e => setEmail(e.target.value)}/>
<label class="field" >Contraseña: </label>
<input class="introduction" type="password" id="password" onChange={e => setPassword(e.target.value)}/>
<input class="introduction" type="password" placeholder="Confirma contraseña" onChange={e => setPasswordCheck(e.target.value)}/>
<input type="submit" value="Registrar" className="btn btn-primary aux" />
</form>
</div>
</div>
);
}
export default Register;