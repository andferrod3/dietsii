import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";




function FichasInsert () {
const  {id} = useParams()
const [dateTime, setDateTime] = useState();
const [age, setAge] = useState();
const [sex, setSex] = useState();
const [altura, setAltura] = useState();
const [peso, setPeso] = useState();
const [cintura, setCintura] = useState();
const [cadera, setCadera] = useState();
const [pecho, setPecho] = useState();
const [muslo, setMuslo] = useState();
const [brazo, setBrazo] = useState();
const [alergias, setAlergias] = useState();
const [restricciones, setRestricciones] = useState();
const [afecciones, setAfecciones] = useState();
const [pacient, setPacient] = useState();
const [error, setError] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();



const submit = async (e) => {
    e.preventDefault();
try{
    const newFicha = {  dateTime, age, sex, altura, peso, cintura, cadera, pecho, muslo, brazo, alergias, restricciones, afecciones, pacient };
    await api.insertFicha(newFicha).then(res => {
        window.alert(`Ficha añadida correctamente`)
        window.location.reload()
        this.setState({
            dateTime: '', 
            age: '', 
            sex: '', 
            altura: '', 
            peso: '', 
            cintura: '', 
            cadera: '', 
            pecho: '', 
            muslo: '', 
            brazo: '', 
            alergias: '', 
            restricciones: '', 
            afecciones: '', 
            pacient: ''
        })
    })
    

    

    } catch(err) {
    
    }
    };



return (
<div className="createficha">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Crear ficha</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit} >
<div class="introductionfi">
<label class="field">Fecha: </label>
<input class="introductionf" type="date" id="dateTime" onChange={e => setDateTime(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Edad: </label>
<input class="introductionf" type="text" id="age" onChange={e => setAge(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Sexo: </label>
<input class="introductionf" type="text" id="sex" onChange={e => setSex(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Altura: </label>
<input class="introductionf" type="text" id="altura" onChange={e => setAltura(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Peso: </label>
<input class="introductionf" type="text" id="peso" onChange={e => setPeso(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Cintura: </label>
<input class="introductionf" type="text" id="cintura" onChange={e => setCintura(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Cadera: </label>
<input class="introductionf" type="text" id="cadera" onChange={e => setCadera(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Pecho: </label>
<input class="introductionf" type="text" id="pecho" onChange={e => setPecho(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Muslo: </label>
<input class="introductionf" type="text" id="muslo" onChange={e => setMuslo(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Brazo: </label>
<input class="introductionf" type="text" id="brazo" onChange={e => setBrazo(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Alergias: </label>
<input class="introductionf" type="text" id="alergias" onChange={e => setAlergias(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Restricciones: </label>
<input class="introductionf" type="text" id="restricciones" onChange={e => setRestricciones(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Afecciones: </label>
<input class="introductionf" type="text" id="afecciones" onChange={e => setAfecciones(e.target.value)}/>
</div>

<input class="introductionf" type="text" id="pacient" ref={e => setPacient(id)} value={id} hidden="true" />

<input type="submit" value="Crear ficha" className="btn btn-primary aux f" />
</form>
</div>
</div>
);
}
export default FichasInsert;