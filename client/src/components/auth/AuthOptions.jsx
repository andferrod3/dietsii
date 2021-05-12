import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import Async from 'react-async';
import api from '../api'
import MenuIcon from '@material-ui/icons/Menu';


function myFunction() {
    var x = document.getElementById("auxauth");
  
    if (x.className === "auth-options") {
        x.className += " responsive";
      } else {
        x.className = "auth-options";
      }
   
  }

function AuthOptions () {
const { userData, setUserData } = useContext(UserContext);
const history = useHistory();
const register = () => history.push("/register");
const login = () => history.push("/login");
const createMovie = () => history.push("/movies/create");
const listMovies = () => history.push("/movies/list");
const homeCita = () => history.push("/citas");
const homePaciente = () => history.push("/pacientes");
const homeMenu = () => history.push("/menus");
const homeEntreno = () => history.push("/entrenos");
const sesion = () => history.push("/chat/join");
const sesionP = () => history.push("/pchat/join");





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

    return (<div className="auth-options" id="auxauth">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
    <li><a className="btn btn-primary mr-2" onClick={homeMenu}>Comidas</a></li>
    <li><a className="btn btn-primary mr-2" onClick={sesion}>Sesiones Profesionales</a></li>
    <li><a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones Paciente</a></li>
    <li><a className="btn btn-primary mr-2" onClick={homePaciente}>Pacientes</a></li>
    <li> <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
    <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                </ul>
            </div>)

}else if(userData.user && userData.user.role == "Entrenador"){
    

    return (<div className="auth-options" id="auxauth">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
                <li><a className="btn btn-primary mr-2" onClick={homeEntreno}>Deportes</a></li>
                <li><a className="btn btn-primary mr-2" onClick={sesion}>Sesiones Profesionales</a></li>
                <li><a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones Paciente</a></li>
                <li><a className="btn btn-primary mr-2" onClick={homePaciente}>Pacientes</a></li>
                <li><a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                <li><a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                
                </ul>
            </div>)

}else if(userData.user && userData.user.role == "Paciente"){

    const tieneE = () =>
    api.getAsignacionEntrenadorToPaciente(userData.user.id)
    .then(res => {return res})
    const tieneN = () =>
    api.getAsignacionNutricionistaToPaciente(userData.user.id)
    .then(res => {return res})

    const registrosNP = () => history.push(`/pacientes/info/${userData.user.id}/registrons`);
    const registrosEP = () => history.push(`/pacientes/info/${userData.user.id}/registroes`);
    const noaceptado = () => history.push("/noaceptado");
    const asignarN = () => history.push("/asignar/nutricionista");
    const asignarE = () => history.push("/asignar/entrenador");
    const registrosP = () => history.push(`/pacientes/info/${userData.user.id}`);

    return (

        <Async promiseFn={tieneN}>

            {({ data, err}) => {
            
            if (err) return `Something went wrong: ${err.message}`

            if (data){

            let tienenu = false;
            let aceptadon = false;

            if(data.data.data.length>0){
                tienenu=true;

                    aceptadon = data.data.data[0].isAccepted
            }
            
                
            return (
                
                <Async promiseFn={tieneE} >

            {({ data, err}) => {
            
            if (err) return `Something went wrong: ${err.message}`

            if (data){

            let tienene = false;
            let aceptadoe = false;

            if(data.data.data.length>0){
                tienene=true;
                aceptadoe = data.data.data[0].isAccepted
            }
            
            if(!tienenu){

                if(!tienene){

                    return (
                

                        <div className="auth-options" id="auxauth">
                        <input class="menu-btn" type="checkbox" id="menu-btn" />
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul class="menu">
                       
                        <li> <a className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
                    
                }else if(tienene && !aceptadoe){

                    return (
                

                        <div className="auth-options" id="auxauth">
                        <input class="menu-btn" type="checkbox" id="menu-btn" />
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul class="menu">
                       
                        <li><a className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
    
    
                }else if(aceptadoe){
    
                    return (
                

                        <div className="auth-options" id="auxauth">
                        <input class="menu-btn" type="checkbox" id="menu-btn" />
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul class="menu">
                       
                        <li><a className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</a></li>
                       <li> <a className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
                }

            }else if(tienenu && !aceptadon){

                if(!tienene){

                    return (
                

                        <div className="auth-options" id="auxauth">
                        <input class="menu-btn" type="checkbox" id="menu-btn" />
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul class="menu">
                       
                        <li> <a className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</a></li>
                        <li><a className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )

                    
                }else if(tienene && !aceptadoe){
    
                    return (
                

                        <div className="auth-options" id="auxauth">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
                       
        <li> <a className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</a></li>
        <li>  <a className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</a></li>
        <li>  <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
        <li>  <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
        <li>  <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li>  <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
                }else if(aceptadoe){
    
                    return (
                

                        <div className="auth-options" id="auxauth">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
                       
        <li> <a className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
                }

            }else if(aceptadon){

                if(!tienene){

                    return (
                

                        <div className="auth-options" id="auxauth">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
                       
        <li>  <a className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
                    
                }else if(tienene && !aceptadoe){

                    return (
                

                        <div className="auth-options" id="auxauth">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
                       
        <li> <a className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</a></li>
        <li>  <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
        <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
    
    
                }else if(aceptadoe){
    
                    return (
                

                        <div className="auth-options" id="auxauth">
                        <input class="menu-btn" type="checkbox" id="menu-btn" />
                        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                        <ul class="menu">
                       
                        <li> <a className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={homeCita}>Citas</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</a></li>
                        <li> <a className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
            </div>
        
        
                    )
    
                }
            }
                
            }
            }}

            

                </Async>

            )}
            }}
            
        </Async>
        
        )

}else{
    return (<div className="auth-options" id="auxauth">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
    <li><a className="btn btn-primary mr-2" onClick={register}>Registrarse</a></li>
    <li><a className="btn btn-primary mr-2" onClick={login}>Login</a></li>
                </ul>
            </div>)
}

}
export default AuthOptions;