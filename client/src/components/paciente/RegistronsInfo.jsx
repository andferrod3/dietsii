import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";
import Async from 'react-async';
import FichasInsert from './FichasInsert';
import FichasList from './FichasList';


import './PacientesInfo.css'

import body from '../images/nervous-system.png'
import almuerzo from '../images/almuerzo.png'
import merienda from '../images/merienda.png'
import cena from '../images/cena.png'
import desayuno from '../images/desayuno.png'
import media from '../images/media.png'
import calendar from '../images/calendar.png'
import moment from 'moment'


function RegistronsInfo () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();

const sacaRegistron = () =>
    api.getRegistronById(id)
    .then(res => {return res})
  

return (


<div className="registron">

<div  class="row">
<Async promiseFn={sacaRegistron}>

{({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div class="cardficha">
  <div class="p-profile">
   <img src={almuerzo} />
  </div>
  
  <div class="nameinfo">
    <img class="iconitosficha" src={calendar} />
    <h2> {moment(data.data.data.dateTime).format('yyyy-MM-DD')}</h2>

  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Lunes</h3>
        <div class="price">L
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoL.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaL.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoL.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaL.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaL.name}</li>
        </ul>
      </div>
      
    </div>
  </div>
  
  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Martes</h3>
        <div class="price">M
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoM.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaM.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoM.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaM.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaM.name}</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Miércoles</h3>
        <div class="price">X
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoX.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaX.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoX.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaX.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaX.name}</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Jueves</h3>
        <div class="price">J
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoJ.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaJ.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoJ.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaJ.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaJ.name}</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Viernes</h3>
        <div class="price">V
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoV.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaV.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoV.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaV.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaV.name}</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Sábado</h3>
        <div class="price">S
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoS.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaS.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoS.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaS.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaS.name}</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Domingo</h3>
        <div class="price">D
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>Desayuno</strong> {data.data.data.desayunoD.name}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaD.name}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoD.name}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaD.name}</li>
          <li><strong>Cena</strong> {data.data.data.cenaD.name}</li>
        </ul>
      </div>
      
    </div>
  </div>



  

</div>
            )
        }}
</Async>


</div>
</div>

    





);
}
export default RegistronsInfo;