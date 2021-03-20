import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
function Login () {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error, setError] = useState();
const { setUserData } = useContext(UserContext);
const history = useHistory();
const submit = async (e) => {
e.preventDefault();
try{
const loginUser = {email, password};
const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
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
<div className="login">
<div class="card">
        <div class="card-title">
<h2>Login</h2>
</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit}>
<label class="field">Email: </label>
<input class="introduction" type="email" id="email" onChange={e => setEmail(e.target.value)}/>
<label class="field">Contraseña: </label>
<input class="introduction" type="password" id="password" onChange={e => setPassword(e.target.value)}/>
<input type="submit" value="Login" className="btn btn-primary aux" />
</form>
</div>
</div>
);
}
export default Login;