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
          <li><strong>Desayuno</strong> {data.data.data.desayunoL}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaL}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoL}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaL}</li>
          <li><strong>Cena</strong> {data.data.data.cenaL}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoM}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaM}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoM}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaM}</li>
          <li><strong>Cena</strong> {data.data.data.cenaM}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoX}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaX}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoX}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaX}</li>
          <li><strong>Cena</strong> {data.data.data.cenaX}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoJ}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaJ}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoJ}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaJ}</li>
          <li><strong>Cena</strong> {data.data.data.cenaJ}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoV}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaV}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoV}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaV}</li>
          <li><strong>Cena</strong> {data.data.data.cenaV}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoS}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaS}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoS}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaS}</li>
          <li><strong>Cena</strong> {data.data.data.cenaS}</li>
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
          <li><strong>Desayuno</strong> {data.data.data.desayunoD}</li>
          <li><strong>Media mañana</strong> {data.data.data.mediaD}</li>
          <li><strong>Almuerzo</strong> {data.data.data.almuerzoD}</li>
          <li><strong>Merienda</strong> {data.data.data.meriendaD}</li>
          <li><strong>Cena</strong> {data.data.data.cenaD}</li>
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