import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import Async from 'react-async';
import api from '../api'
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

    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={homeMenu}>Comidas</button>
                <button className="btn btn-primary mr-2" onClick={sesion}>Sesiones Profesionales</button>
                <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones Paciente</button>
                <button className="btn btn-primary mr-2" onClick={homePaciente}>Pacientes</button>
                <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
            </nav>)

}else if(userData.user && userData.user.role == "Entrenador"){
    

    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={homeEntreno}>Deportes</button>
                <button className="btn btn-primary mr-2" onClick={sesion}>Sesiones Profesionales</button>
                <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones Paciente</button>
                <button className="btn btn-primary mr-2" onClick={homePaciente}>Pacientes</button>
                <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
            </nav>)

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
                

                    <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
                    
                }else if(tienene && !aceptadoe){

                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
    
    
    
                }else if(aceptadoe){
    
                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={asignarN}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
    
                }

            }else if(tienenu && !aceptadon){

                if(!tienene){

                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )

                    
                }else if(tienene && !aceptadoe){
    
                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
    
                }else if(aceptadoe){
    
                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
    
                }

            }else if(aceptadon){

                if(!tienene){

                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={asignarE}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
                    
                }else if(tienene && !aceptadoe){

                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={noaceptado}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
                    )
    
    
    
                }else if(aceptadoe){
    
                    return (
                

                        <nav className="auth-options">
                       
                        <button className="btn btn-primary mr-2" onClick={registrosEP}>Registros deportivos</button>
                        <button className="btn btn-primary mr-2" onClick={registrosNP}>Registros nutricionales</button>
                        <button className="btn btn-primary mr-2" onClick={homeCita}>Citas</button>
                        <button className="btn btn-primary mr-2" onClick={registrosP}>Mis datos</button>
                        <button className="btn btn-primary mr-2" onClick={sesionP}>Sesiones</button>
                        <button className="btn btn-primary mr-2" onClick={logout}>Cerrar sesión</button>
                    </nav>
        
        
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
    return (<nav className="auth-options">
                <button className="btn btn-primary mr-2" onClick={register}>Registrarse</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
            </nav>)
}

}
export default AuthOptions;