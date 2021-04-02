import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'



import './PacientesHome.css'
import PacientesList from './PacientesList';
import PacientesAcceptedList from './PacientesAcceptedList';




function PacientesHome () {
const {userData} = useContext(UserContext);
const history = useHistory();
const [dateState, setDateState] = useState(new Date())
const changeDate = (e) => {
    setDateState(e)
  }



return (


<div className="pacientes">
    
<h2 class="titlepage">Apartado de Pacientes</h2>

<div class= "row">
<div class="list-pacientes-not">
<h3 class="subtitle">Pacientes sin asignar</h3>
<PacientesList userData = {userData}/>
</div>
<div class="list-pacientes">
<h3 class="subtitle">Mis pacientes</h3>
<PacientesAcceptedList userData = {userData}/>
</div>
</div>

</div>








);
}
export default PacientesHome;