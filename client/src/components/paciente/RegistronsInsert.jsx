import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";




function RegistronsInsert () {
const  {id} = useParams()
const [dateTime, setDateTime] = useState();
const [estadoAnimo, setEstadoAnimo] = useState();
const [professional, setProfessional] = useState();
const [pacient, setPacient] = useState();
const [desayunoL, setDesayunoL] = useState();
const [mediaL, setMediaL] = useState();
const [almuerzoL, setAlmuerzoL] = useState();
const [meriendaL, setMeriendaL] = useState();
const [cenaL, setCenaL] = useState();
const [desayunoM, setDesayunoM] = useState();
const [mediaM, setMediaM] = useState();
const [almuerzoM, setAlmuerzoM] = useState();
const [meriendaM, setMeriendaM] = useState();
const [cenaM, setCenaM] = useState();
const [desayunoX, setDesayunoX] = useState();
const [mediaX, setMediaX] = useState();
const [almuerzoX, setAlmuerzoX] = useState();
const [meriendaX, setMeriendaX] = useState();
const [cenaX, setCenaX] = useState();
const [desayunoJ, setDesayunoJ] = useState();
const [mediaJ, setMediaJ] = useState();
const [almuerzoJ, setAlmuerzoJ] = useState();
const [meriendaJ, setMeriendaJ] = useState();
const [cenaJ, setCenaJ] = useState();
const [desayunoV, setDesayunoV] = useState();
const [mediaV, setMediaV] = useState();
const [almuerzoV, setAlmuerzoV] = useState();
const [meriendaV, setMeriendaV] = useState();
const [cenaV, setCenaV] = useState();
const [desayunoS, setDesayunoS] = useState();
const [mediaS, setMediaS] = useState();
const [almuerzoS, setAlmuerzoS] = useState();
const [meriendaS, setMeriendaS] = useState();
const [cenaS, setCenaS] = useState();
const [desayunoD, setDesayunoD] = useState();
const [mediaD, setMediaD] = useState();
const [almuerzoD, setAlmuerzoD] = useState();
const [meriendaD, setMeriendaD] = useState();
const [cenaD, setCenaD] = useState();
const {userData} = useContext(UserContext);
const [error, setError] = useState();



const submit = async (e) => {
    e.preventDefault();
try{
    const newRegistron = {  
        dateTime, 
        estadoAnimo, 
        professional,
        pacient,
        desayunoL,
        mediaL,
        almuerzoL,
        meriendaL,
        cenaL,
        desayunoM,
        mediaM,
        almuerzoM,
        meriendaM,
        cenaM,
        desayunoX,
        mediaX,
        almuerzoX,
        meriendaX,
        cenaX,
        desayunoJ,
        mediaJ,
        almuerzoJ,
        meriendaJ,
        cenaJ,
        desayunoV,
        mediaV,
        almuerzoV,
        meriendaV,
        cenaV,
        desayunoS,
        mediaS,
        almuerzoS,
        meriendaS,
        cenaS,
        desayunoD,
        mediaD,
        almuerzoD,
        meriendaD,
        cenaD };
    await api.insertRegistron(newRegistron).then(res => {
        window.alert(`Registro añadido correctamente`)
        window.location.reload()
        this.setState({
            dateTime:'', 
            estadoAnimo:'', 
            professional:'',
            pacient:'',
            desayunoL:'',
            mediaL:'',
            almuerzoL:'',
            meriendaL:'',
            cenaL:'',
            desayunoM:'',
            mediaM:'',
            almuerzoM:'',
            meriendaM:'',
            cenaM:'',
            desayunoX:'',
            mediaX:'',
            almuerzoX:'',
            meriendaX:'',
            cenaX:'',
            desayunoJ:'',
            mediaJ:'',
            almuerzoJ:'',
            meriendaJ:'',
            cenaJ:'',
            desayunoV:'',
            mediaV:'',
            almuerzoV:'',
            meriendaV:'',
            cenaV:'',
            desayunoS:'',
            mediaS:'',
            almuerzoS:'',
            meriendaS:'',
            cenaS:'',
            desayunoD:'',
            mediaD:'',
            almuerzoD:'',
            meriendaD:'',
            cenaD:''
        })
    })
    

    

    } catch(err) {
    
    }
    };



return (
<div className="createregistron">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Crear registro nutricional</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<div class="cregistron">
<form onSubmit={submit} class="registron">
<div class="pairs">
<label class="field">Fecha: </label>
<input class="introductionf" type="date" id="dateTime" onChange={e => setDateTime(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Estado de ánimo: </label>
<input class="introductionf" type="text" id="estadoAnimo" onChange={e => setEstadoAnimo(e.target.value)}/>
</div>
<div class="lunes">


<div class="days">
<p class="dayl">Lunes</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoL" onChange={e => setDesayunoL(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaL" onChange={e => setMediaL(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoL" onChange={e => setAlmuerzoL(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaL" onChange={e => setMeriendaL(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaL" onChange={e => setCenaL(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Martes</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoM" onChange={e => setDesayunoM(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaM" onChange={e => setMediaM(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoM" onChange={e => setAlmuerzoM(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaM" onChange={e => setMeriendaM(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaM" onChange={e => setCenaM(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Miércoles</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoX" onChange={e => setDesayunoX(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaX" onChange={e => setMediaX(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoX" onChange={e => setAlmuerzoX(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaX" onChange={e => setMeriendaX(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaX" onChange={e => setCenaX(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Jueves</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoJ" onChange={e => setDesayunoJ(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaJ" onChange={e => setMediaJ(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoJ" onChange={e => setAlmuerzoJ(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaJ" onChange={e => setMeriendaJ(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaJ" onChange={e => setCenaJ(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Viernes</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoV" onChange={e => setDesayunoV(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaV" onChange={e => setMediaV(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoV" onChange={e => setAlmuerzoV(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaV" onChange={e => setMeriendaV(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaV" onChange={e => setCenaV(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Sábado</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoS" onChange={e => setDesayunoS(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaS" onChange={e => setMediaS(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoS" onChange={e => setAlmuerzoS(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaS" onChange={e => setMeriendaS(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaS" onChange={e => setCenaS(e.target.value)}/>
</div>
</div>
<div>

<div class="days">
<p class="day">Domingo</p>
<label class="field">Desayuno: </label>
<input class="introductionf" type="text" id="desayunoD" onChange={e => setDesayunoD(e.target.value)}/>

<label class="field">Media mañana: </label>
<input class="introductionf" type="text" id="mediaD" onChange={e => setMediaD(e.target.value)}/>

<label class="field">Almuerzo: </label>
<input class="introductionf" type="text" id="almuerzoD" onChange={e => setAlmuerzoD(e.target.value)}/>

<label class="field">Merienda: </label>
<input class="introductionf" type="text" id="meriendaD" onChange={e => setMeriendaD(e.target.value)}/>

<label class="field">Cena: </label>
<input class="introductionf" type="text" id="cenaD" onChange={e => setCenaD(e.target.value)}/>
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
export default RegistronsInsert;