import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import CitasInsert from './CitasInsert';
import CitasList from './PacientesList';
import './CitasHome.css'



function CitasHome () {
const {userData} = useContext(UserContext);
const history = useHistory();
const [dateState, setDateState] = useState(new Date())
const changeDate = (e) => {
    setDateState(e)
  }



return (

<div className="Pacientes">
    
<h2 clas="titlepage">Apartado de Pacientes</h2>

<div class= "row">
    
<div className="bigCalendar-container">
<Calendar 
   value={dateState}
   onChange={changeDate}
 />
 <p>La fecha seleccionada es <b>{moment(dateState).format('DD/MM/yyyy')}</b></p>
  </div>


<div class="listado">
<CitasList dateState = {dateState} userData = {userData} />
</div>

<CitasInsert />
</div>
</div>


);
}
export default CitasHome;