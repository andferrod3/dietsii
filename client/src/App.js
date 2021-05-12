import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Join from './components/Join/Join';
import JoinP from './components/Join/JoinP';
import Chat from './components/Chat';
import {SesionHome, SesionPHome } from './components/Chat'


import 'bootstrap/dist/css/bootstrap.min.css'
import { MoviesList, MoviesInsert, MoviesUpdate } from './pages';
import { CitasList, CitasInsert, CitasUpdate, CitasHome } from './components/cita';
import { MenusList, MenusInsert, MenusHome } from './components/menu';
import { RegistroesHome, RegistroesList, RegistroesInsert, EntrenosHome, RegistroesInfo } from './components/entrenador';
import { PacientesList, PacientesHome, PacientesInfo, FichasUpdate, FichasInfo, RegistronsHome, RegistronsUpdate, RegistronsInfo, RegistronsInsertSo } from './components/paciente';
import {AsignacionInsert, AsignacionEntrenadorInsert} from './components/pacientes';
import  {useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import HomeNotAccepted from './components/pages/HomeNotAccepted'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserContext from './context/userContext';
import './App.css';
import NoPermision from './components/errors/NoPermision';

import CreateRoom from "./components/videocall/CreateRoom";
import Room from "./components/videocall/Room";

const user = null;

function App() {

   
    const [ userData, setUserData] = useState({
            token: undefined,
            user: undefined
        });
        useEffect(() => {
            const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if(token === null){
            localStorage.setItem("auth-token", "");
            token = "";
        }
        const tokenResponse = await axios.post('https://dietsii.herokuapp.com/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
            if (tokenResponse.data) {
                const userRes = await axios.get("https://dietsii.herokuapp.com/users/", {
                headers: { "x-auth-token": token },
        });
        setUserData({
            token,
            user: userRes.data,
        });
        }
        }
        checkLoggedIn();
        }, []);

            if(userData.user){
                return (
                    <BrowserRouter>
                    <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/noaceptado" component={HomeNotAccepted} />
                        <Route path="/chat/join" exact component={Join} />
                        <Route path="/chat" component={SesionHome} />
                        <Route path="/citas" exact component={CitasHome} />
                        <Route path="/citas/list" exact component={CitasList} />
                        <Route path="/citas/create" exact component={CitasInsert} />
                        <Route path="/citas/update/:id" exact component={CitasUpdate} />
                        <Route path="/pchat/join" exact component={JoinP} />
                        <Route path="/menus" exact component={MenusHome} />
                        <Route path="/entrenos" exact component={EntrenosHome} />
                        <Route path="/pchat" component={SesionPHome} />
                        <Route path="/asignar/nutricionista" component={AsignacionInsert} />
                        <Route path="/asignar/entrenador" component={AsignacionEntrenadorInsert} />

                        <Route path="/pacientes" exact component={PacientesHome} />
                        <Route path="/pacientes/info/:id" exact component={PacientesInfo} />
                        <Route path="/fichas/info/:id" exact component={FichasInfo} />
                        <Route path="/registrons/info/:id" exact component={RegistronsInfo} />
                        <Route path="/registroes/info/:id" exact component={RegistroesInfo} />
                        <Route path="/fichas/update/:id" exact component={FichasUpdate} />
                        <Route path="/registrons/update/:id" exact component={RegistronsUpdate} />
                        <Route path="/pacientes/info/:id/registrons" exact component={RegistronsHome} />
                        <Route path="/pacientes/info/:id/registroes" exact component={RegistroesHome} />
                        <Route path="/register" component={NoPermision} />
                        <Route path="/login" component={NoPermision} />
                        <Route path="/videocall" exact component={CreateRoom} />
                        <Route path="/room/:roomID" component={Room} />
                    </Switch>
                    </UserContext.Provider>
                    </BrowserRouter>
                );
            }else{
                return (
                    <BrowserRouter>
                    <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/chat/join" exact component={NoPermision} />
                        <Route path="/chat" component={NoPermision} />
                        <Route path="/movies/list" exact component={NoPermision} />
                        <Route path="/movies/create" exact component={NoPermision} />
                        <Route path="/movies/update/:id" exact component={NoPermision} />
                        <Route path="/citas/list" exact component={NoPermision} />
                        <Route path="/citas/create" exact component={NoPermision} />
                        <Route path="/citas/update/:id" exact component={NoPermision} />
                        <Route path="/citas" exact component={NoPermision} />

                        <Route path="/pacientes" exact component={NoPermision} />
                        <Route path="/pacientes/info/:id" exact component={NoPermision} />

                    </Switch>
                    </UserContext.Provider>
                    </BrowserRouter>
                );
            }
           
}


export default App;