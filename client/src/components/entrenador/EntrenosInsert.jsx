import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";




function EntrenosInsert () {

const [name, setName] = useState();
const [calorias, setCalorias] = useState();
const [rutina, setRutina] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();
const [error, setError] = useState();



const submit = async (e) => {
    e.preventDefault();
try{
    const newEntreno = {  name, calorias, rutina };
    await api.insertEntreno(newEntreno).then(res => {
        window.alert(`Entreno añadido correctamente`)
        window.location.reload()
        this.setState({
            name: '', 
            calorias: '', 
            rutina: '', 
        })
    })
    
    } catch(err) {
        err.response.data.msg && setError(err.response.data.msg)
    }
    };



return (
<div className="createficha">
    <div class="cardcitae cardcita ">
        <div class="cardcita-title">
<h2>Crear Entreno deportivo</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit} >
<div class="introductionfi">
<label class="field">Nombre: </label>
<input class="introductionf" type="text" id="name" onChange={e => setName(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Calorias: </label>
<input class="introductionf" type="text" id="calorias" onChange={e => setCalorias(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Rutina: </label>
<textarea class="introductionf" type="text" id="rutina" onChange={e => setRutina(e.target.value)}/>
</div>


<input type="submit" value="Crear" className="btn btn-primary aux f" />
</form>
</div>
</div>
);
}
export default EntrenosInsert;