import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useParams } from "react-router";
import RegistroesInsertSoNormal from './RegistroesInsertSoNormal'
import RegistroesList from './RegistroesList'





function RegistroesHome () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();


  

if(userData.user.role=='Entrenador'){
return (


<div className="registronshome">

<div  class="row">
<div class="registronlist">
<RegistroesList userId={id} userData={userData}></RegistroesList>
</div>

<div class="registroeinsert">
<RegistroesInsertSoNormal  idEdit01="edi01" idEdit02="edi02" idEdit03="edi03" idEdit04="edi04"
        idEdit05="edi05" idEdit06="edi06" idEdit07="edi07" idEdit08="edi08" idEdit09="edi09"
        idEdit010="edi010" idEdit011="edi011" 
        idEditCal0="editCal0" userData={userData} userId={id}></RegistroesInsertSoNormal>
</div>
</div>
</div>

    





);}else if(userData.user.role=="Nutricionista"){
  return (
    <div className="registronshome">

    <div  class="row">
    <div class="registronlist">
    <RegistroesList 
    
    
    userId={id} userData={userData}></RegistroesList>
    </div>
    </div>
    </div>
    
  );  
}
}
export default RegistroesHome;