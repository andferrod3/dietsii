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

<div className="Pacientes">
    
<h2 clas="titlepage">Apartado de Pacientes</h2>
<PacientesList userData = {userData}/>
<PacientesAcceptedList userData = {userData}/>

<div class= "row">
    

</div>
</div>


);
}
export default PacientesHome;