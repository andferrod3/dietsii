import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import Async from 'react-async';
import Select from 'react-select';

const newDate = new Date().toLocaleString;
const tipo = "Nutricionista"


function AsignacionInsert () {
    const [error, setError] = useState();
const [dateTime, setDateTime] = useState();
const [description, setDescription] = useState();
const [pacient, setPacient] = useState();
const [professional, setProfessional] = useState();
const [isAccepted, setIsAccepted] = useState();
const [type, setType] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();
const newDate = new Date();
const fecha = newDate.getFullYear() + '-' + (newDate.getMonth()+1) +'-'+ newDate.getDay();
const tipo = "Nutricionista"

const onChange = async (selectedOption) => {

    console.log(`Option selected:`, selectedOption);
    setPacient(selectedOption.val);
    
  };

const submit = async (e) => {
    e.preventDefault();
try{
    const newAsignacion = {  dateTime, description, pacient, isAccepted, type };
    await api.insertAsignacion(newAsignacion).then(res => {
        window.alert(`Solicitud de asignación enviada correctamente`)
        window.location.href = `/noaceptado`
        window.location.reload()
        this.setState({
     
            dateTime: '',
            description: '',
            pacient: '',
            isAccepted: '',
            type: '',
            professional: '',
        })
    })
    

    

    } catch(err) {
    
    }
    };


return (
<div className="create">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Solicitar Asignación Nutricionista</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit}>
 


<label class="field">Descripción de la solicitud: </label>
<input class="introduction" type="text" id="description" onChange={e => setDescription(e.target.value)}/>
<input class="introduction"  id="dateTime" ref={e => setDateTime(fecha)} value={fecha} hidden="true" />
<input class="introduction"  id="type" ref={e => setType(tipo)} value={ tipo } hidden="true" />
<input class="introduction" id="pacient" ref={e => setPacient(userData.user.id)} value={userData.user.id} hidden="true" />
<input class="introduction" id="professional" ref={e => setProfessional('')} value={''} hidden="true" />
<input class="introduction" id="isAccepted" ref={e => setIsAccepted('false')} value={'false'} hidden="true" />

<input type="submit" value="Solicitar" className="btn btn-primary aux" />
</form>
</div>
</div>
);
}
export default AsignacionInsert;