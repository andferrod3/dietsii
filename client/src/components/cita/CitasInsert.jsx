import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'

function CitasInsert () {
const [sessionName, setSessionName] = useState();
const [dateTime, setDateTime] = useState();
const [professional, setProfessional] = useState();
const [pacient, setPacient] = useState();
const [error, setError] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();
const submit = async (e) => {
    e.preventDefault();
try{
    const newCita = { sessionName, dateTime, professional, pacient };
    await api.insertCita(newCita).then(res => {
        window.alert(`Cita añadida correctamente`)
        this.setState({
            sessionName: '',
            dateTime: '',
            professional: '',
            pacient: '',
        })
    })

    

    } catch(err) {
    
    }
    };
return (
<div className="create">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Crear cita</h2>
</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit}>
<label class="field">Nombre de la sesión: </label>
<input class="introduction" type="text" id="sessionName" onChange={e => setSessionName(e.target.value)}/>
<label class="field">Fecha y Hora: </label>
<input class="introduction" type="datetime-local" id="dateTime" onChange={e => setDateTime(e.target.value)}/>
<input class="introduction" id="professional" ref={e => setProfessional(userData.user.id)} value={userData.user.id} hidden="true" />
<label class="field">Paciente: </label>
<input class="introduction" type="text" id="pacient" onChange={e => setPacient(e.target.value)}  />
<input type="submit" value="Crear cita" className="btn btn-primary aux" />
</form>
</div>
</div>
);
}
export default CitasInsert;