import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";




function MenusInsert () {

const [name, setName] = useState();
const [calorias, setCalorias] = useState();
const [hidratos, setHidratos] = useState();
const [proteinas, setProteinas] = useState();
const [grasas, setGrasas] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();
const [error, setError] = useState();



const submit = async (e) => {
    e.preventDefault();
try{
    const newMenu = {  name, calorias, hidratos, proteinas, grasas };
    await api.insertMenu(newMenu).then(res => {
        window.alert(`Menu añadido correctamente`)
        window.location.reload()
        this.setState({
            name: '', 
            calorias: '', 
            hidratos: '', 
            proteinas: '', 
            grasas: '', 
        })
    })
    
    } catch(err) {
    
    }
    };



return (
<div className="createficha">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Crear Comida</h2>

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
<label class="field">Hidratos: </label>
<input class="introductionf" type="text" id="hidratos" onChange={e => setHidratos(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Proteinas: </label>
<input class="introductionf" type="text" id="proteinas" onChange={e => setProteinas(e.target.value)}/>
</div>
<div class="pairs">
<label class="field">Grasas: </label>
<input class="introductionf" type="text" id="grasas" onChange={e => setGrasas(e.target.value)}/>
</div>


<input type="submit" value="Crear comida" className="btn btn-primary aux f" />
</form>
</div>
</div>
);
}
export default MenusInsert;