import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";




function RegistroesInsert () {
const  {id} = useParams()
const [dateTime, setDateTime] = useState();
const [dificultad, setDificultad] = useState();
const [professional, setProfessional] = useState();
const [pacient, setPacient] = useState();
const [lunes, setLunes] = useState();
const [martes, setMartes] = useState();
const [miercoles, setMiercoles] = useState();
const [jueves, setJueves] = useState();
const [viernes, setViernes] = useState();
const [sabado, setSabado] = useState();
const [domingo, setDomingo] = useState();
const {userData} = useContext(UserContext);
const [error, setError] = useState();



const submit = async (e) => {
    e.preventDefault();
try{
    const newRegistroe = {  
        dateTime, 
        dificultad, 
        professional,
        pacient,
        lunes,
        martes,
        miercoles,
        jueves,
        viernes,
        sabado,
        domingo,
       };
    await api.insertRegistroe(newRegistroe).then(res => {
        window.alert(`Registro añadido correctamente`)
        window.location.reload()
        this.setState({
            dateTime:'', 
            dificultad:'', 
            professional:'',
            pacient:'',
            lunes:'',
            martes:'',
            miercoles:'',
            jueves:'',
            viernes:'',
            sabado:'',
            domingo:'',
        })
    })
    

    

    } catch(err) {
    
    }
    };



return (
<div className="createregistron">
    <div class="entreno cardcita">
        <div class="cardcita-title">
<h2>Crear registro deportivo</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<div class="cregistron">
<form onSubmit={submit} class="registron">
<div class="pairs">
<label class="field">Fecha: </label>
<input class="introductionf" type="date" id="dateTime" onChange={e => setDateTime(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Dificultad: </label>
<input class="introductionf" type="text" id="dificultad" onChange={e => setDificultad(e.target.value)}/>
</div>
<div class="lunes">


<div class="days">
<p class="dayl">Lunes</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="lunes" onChange={e => setLunes(e.target.value)}/>


</div>
</div>
<div>

<div class="days">
<p class="day">Martes</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="martes" onChange={e => setMartes(e.target.value)}/>

</div>
</div>
<div>

<div class="days">
<p class="day">Miércoles</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="miercoles" onChange={e => setMiercoles(e.target.value)}/>

</div>
</div>
<div>

<div class="days">
<p class="day">Jueves</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="jueves" onChange={e => setJueves(e.target.value)}/>

</div>
</div>
<div>

<div class="days">
<p class="day">Viernes</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="viernes" onChange={e => setViernes(e.target.value)}/>

</div>
</div>
<div>

<div class="days">
<p class="day">Sábado</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="sabado" onChange={e => setSabado(e.target.value)}/>

</div>
</div>
<div>

<div class="days">
<p class="day">Domingo</p>
<label class="field">Entrenamiento: </label>
<input class="introductionf" type="text" id="desayunoD" onChange={e => setDomingo(e.target.value)}/>
</div>
</div>
<input class="introductionf" type="text" id="pacient" ref={e => setPacient(id)} value={id} hidden="true" />
<input class="introductionf" type="text" id="professional" ref={e => setProfessional(userData.user.id)} value={userData.user.id} hidden="true" />

<input type="submit" value="Crear registro" className="btn btn-primary aux f" />
</form>
</div>
</div>
</div>
);
}
export default RegistroesInsert;