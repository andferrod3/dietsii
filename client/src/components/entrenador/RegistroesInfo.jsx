import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";
import Async from 'react-async';




import body from '../images/nervous-system.png'
import almuerzo from '../images/almuerzo.png'
import merienda from '../images/merienda.png'
import cena from '../images/cena.png'
import desayuno from '../images/desayuno.png'
import media from '../images/media.png'
import calendar from '../images/calendar.png'
import moment from 'moment'


function RegistroesInfo () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();

const sacaRegistroe = () =>
    api.getRegistroeById(id)
    .then(res => {return res})
  

return (


<div className="registroe">

<div  class="row">
<Async promiseFn={sacaRegistroe}>

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
          <li> {data.data.data.lunes.name}</li>
          <li>{data.data.data.lunes.calorias}</li>
          <li>{data.data.data.lunes.descripcion}</li>
     
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
        <li> {data.data.data.martes.name}</li>
          <li> {data.data.data.martes.calorias}</li>
          <li> {data.data.data.martes.descripcion}</li>
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
        <li> {data.data.data.miercoles.name}</li>
          <li>{data.data.data.miercoles.calorias}</li>
          <li> {data.data.data.miercoles.descripcion}</li>
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
        <li> {data.data.data.jueves.name}</li>
          <li>{data.data.data.jueves.calorias}</li>
          <li> {data.data.data.jueves.descripcion}</li>
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
        <li> {data.data.data.viernes.name}</li>
          <li>{data.data.data.viernes.calorias}</li>
          <li> {data.data.data.viernes.descripcion}</li>
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
        <li>{data.data.data.sabado.name}</li>
          <li> {data.data.data.sabado.calorias}</li>
          <li> {data.data.data.sabado.descripcion}</li>
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
        <li>{data.data.data.domingo.name}</li>
          <li>{data.data.data.domingo.calorias}</li>
          <li> {data.data.data.domingo.descripcion}</li>
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
export default RegistroesInfo;