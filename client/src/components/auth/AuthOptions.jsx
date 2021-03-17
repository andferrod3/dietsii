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
const logout = () => {
setUserData({
token: undefined,
user: undefined
})
localStorage.setItem("auth-token","");
};
return (
<nav className="auth-options">
{userData.user ? (
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
)
}
export default AuthOptions;