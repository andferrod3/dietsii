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
import calendar from '../images/calendar.png'
import arm from '../images/arm.png'
import caderas from '../images/caderas.png'
import chest from '../images/chest.png'
import cintura from '../images/cintura.png'
import height from '../images/height-limit.png'
import hospital from '../images/hospital-bed.png'
import leg from '../images/leg.png'
import alergias from '../images/sin-gluten.png'
import vegan from '../images/vegan.png'
import weight from '../images/weight-scale.png'
import birth from '../images/grupo-de-edad.png'
import sex from '../images/sex.png'


import moment from 'moment'


function FichasInfo () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();

const sacaFicha = () =>
    api.getFichaById(id)
    .then(res => {return res})
  

    /*
async function sacaPaciente(id) {

  const pacient = await api.getUserById(id)
  return pacient

}
const aux = sacaPaciente(id);*/
return (


<div className="ficha">

<div  class="row">
<Async promiseFn={sacaFicha}>

{({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div class="cardficha">
  <div class="p-profile">
   <img src={body} />
  </div>
  
  <div class="nameinfo">
    <img class="iconitosficha" src={calendar} />
    <h2> {moment(data.data.data.dateTime).format('yyyy-MM-DD')}</h2>

  </div>
  

  
  <div class="infosficha"> 
    
    <div class="infolineficha">
    <img class="iconitosficha" src={birth} />
      <p>{data.data.data.age}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={sex} />
      <p>{data.data.data.sex}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={height} />
      <p>{data.data.data.altura}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={weight} />
      <p>{data.data.data.peso}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={cintura} />
      <p>{data.data.data.cintura}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={caderas} />
      <p>{data.data.data.cadera}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={chest} />
      <p>{data.data.data.pecho}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={leg} />
      <p>{data.data.data.muslo}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={arm} />
      <p>{data.data.data.brazo}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={alergias} />
      <p>{data.data.data.alergias}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={vegan} />
      <p>{data.data.data.restricciones}</p>
    </div>
    <div class="infolineficha">
    <img class="iconitosficha" src={hospital} />
      <p>{data.data.data.afecciones}</p>
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
export default FichasInfo;