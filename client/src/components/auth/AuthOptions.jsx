import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
function AuthOptions () {
const { userData, setUserData } = useContext(UserContext);
const history = useHistory();
const register = () => history.push("/register");
const login = () => history.push("/login");
const createMovie = () => history.push("/movies/create");
const listMovies = () => history.push("/movies/list");
const homeCita = () => history.push("/citas");
const logout = () => {
setUserData({
token: undefined,
user: undefined
})
localStorage.setItem("auth-token","");
};

/*
return (
<nav className="auth-options">
{userData.user && userData.user.role == "Nutricionista"? (
    <>
<button className="btn btn-primary mr-2" onClick={createMovie}>Create Movie</button>
<button className="btn btn-primary mr-2" onClick={listMovies}>List Movie</button>
<button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
</>
) : (
<>
<button className="btn btn-primary mr-2" onClick={register}>Registrarse</button>
<button className="btn btn-primary mr-2" onClick={login}>Login</button>
</>
)}
</nav>
)*/

if(userData.user && userData.user.role == "Nutricionista"){

    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={homeCita}>Pacientes</button>
                <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
            </nav>)

}else if(userData.user && userData.user.role == "Entrenador"){

    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={createMovie}>Create Movie</button>
               
                <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
            </nav>)

}else if(userData.user && userData.user.role == "Paciente"){

    return (<nav className="auth-options">
               
                <button className="btn btn-primary mr-2" onClick={listMovies}>List Movie</button>
                <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
            </nav>)

}else{
    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={register}>Registrarse</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
            </nav>)
}

}
export default AuthOptions;