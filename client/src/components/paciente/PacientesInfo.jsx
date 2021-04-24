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
import RegistronsInsert from './RegistronsInsert'
import RegistronsList from './RegistronsList'

import './PacientesInfo.css'

import profile from '../images/profile.png'
import birth from '../images/birthday-cake.png'
import email from '../images/email.png'
import home from '../images/home.png'
import phone from '../images/phone-call.png'
import user from '../images/user.png'


import moment from 'moment'


function PacientesInfo () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();
const url = "/pacientes/info/" + id + "/registrons"
const homeRegistrons = () => history.push(url);
const url2 = "/pacientes/info/" + id + "/registroes"
const homeRegistroes = () => history.push(url2);

const sacaPaciente = () =>
    api.getUserById(id)
    .then(res => {return res})
  
if(userData.user.role=="Nutricionista" || userData.user.role=="Entrenador"){
return (


<div className="pacientes">

<div  class="row">
<Async promiseFn={sacaPaciente}>

{({ data, err, isLoading }) => {
          if (isLoading) return "Loading..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div class="cardinfo">
  <div class="p-profile">
   <img src={profile} />
  </div>
  
  <div class="nameinfo">
    <h2> {data.data.data.name} {data.data.data.surname}</h2>
    <p> </p>
  </div>
  

  
  <div class="infos"> 
    
    <div class="infoline">
    <img class="iconitos" src={email} />
      <p>{data.data.data.email}</p>
    </div>
    <div class="infoline">
    <img class="iconitos" src={phone} />
      <p>{data.data.data.phone}</p>
    </div>
    <div class="infoline">
    <img class="iconitos" src={home} />
      <p>{data.data.data.address}</p>
    </div>
    <div class="infoline">
    <img class="iconitos" src={birth} />
      <p>{moment(data.data.data.birth).format('yyyy-MM-DD')}</p>
    </div>
    <div class="infoline">
    <img class="iconitos" src={user} />
      <p>{data.data.data.role}</p>
    </div>
    <div class="infoline">
      <button className="btn btn-primary mr-2" onClick={homeRegistrons}>Registros nutricionales</button>
    </div>
    <div class="infoline">
      <button className="btn btn-primary mr-2" onClick={homeRegistroes}>Registros deportivos</button>
    </div>
  </div>
  

</div>
            )
        }}
</Async>

<div class="fichalist">
<FichasList userId={id} userData={userData} ></FichasList>
</div>
<div class="fichainsert">
<FichasInsert userId={id}></FichasInsert>
</div>
</div>

</div>

    





);}
else if(userData.user.role=="Paciente"){
  return (
  
  
  <div className="pacientes">
  
  <div  class="row">
  <Async promiseFn={sacaPaciente}>
  
  {({ data, err, isLoading }) => {
            if (isLoading) return "Loading..."
            if (err) return `Something went wrong: ${err.message}`
  
            if (data)
              return (
                <div class="cardinfo">
    <div class="p-profile">
     <img src={profile} />
    </div>
    
    <div class="nameinfo">
      <h2> {data.data.data.name} {data.data.data.surname}</h2>
      <p> </p>
    </div>
    
  
    
    <div class="infos"> 
      
      <div class="infoline">
      <img class="iconitos" src={email} />
        <p>{data.data.data.email}</p>
      </div>
      <div class="infoline">
      <img class="iconitos" src={phone} />
        <p>{data.data.data.phone}</p>
      </div>
      <div class="infoline">
      <img class="iconitos" src={home} />
        <p>{data.data.data.address}</p>
      </div>
      <div class="infoline">
      <img class="iconitos" src={birth} />
        <p>{moment(data.data.data.birth).format('yyyy-MM-DD')}</p>
      </div>
      <div class="infoline">
      <img class="iconitos" src={user} />
        <p>{data.data.data.role}</p>
      </div>
      <div class="infoline">
        <button className="btn btn-primary mr-2" onClick={homeRegistrons}>Registros nutricionales</button>
      </div>
      <div class="infoline">
        <button className="btn btn-primary mr-2" onClick={homeRegistroes}>Registros deportivos</button>
      </div>
    </div>
    
  
  </div>
              )
          }}
  </Async>
  
  <div class="fichalist">
  <FichasList userId={id} userData={userData}></FichasList>
  </div>
  
  </div>
  
  </div>
  
      
  
  
  
  
  
  );}
}
export default PacientesInfo;