import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useParams } from "react-router";
import RegistronsInsert from './RegistronsInsert'
import RegistronsList from './RegistronsList'
import RegistronsInsertSoNormal from './RegistronsInsertSoNormal'
import './PacientesInfo.css'



function RegistronsHome () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();


  

if(userData.user.role=='Nutricionista'){
return (


<div className="registronshome">

<div  class="row">
<div class="registronlist">
<RegistronsList userId={id} userData={userData}></RegistronsList>
</div>

<div class="registroninsert">
<RegistronsInsertSoNormal class="registronsesion" idEdit="edi1" idEdit2="edi2" idEdit3="edi3" idEdit4="edi4"
        idEdit5="edi5" idEdit6="edi6" idEdit7="edi7" idEdit8="edi8" idEdit9="edi9"
        idEdit10="edi10" idEdit11="edi11" idEdit12="edi12" idEdit13="edi13" idEdit14="edi14"
        idEdit15="edi15" idEdit16="edi16" idEdit17="edi17" idEdit18="edi18" idEdit19="edi19"
        idEdit20="edi20" idEdit21="edi21" idEdit22="edi22" idEdit23="edi23" idEdit24="edi24"
        idEdit25="edi25" idEdit26="edi26" idEdit27="edi27" idEdit28="edi28" idEdit29="edi29"
        idEdit30="edi30" idEdit31="edi31" idEdit32="edi32" idEdit33="edi33" idEdit34="edi34"
        idEdit35="edi35" idEdit36="edi36" idEdit37="edi37" idEdit38="edi38" idEdit39="edi39"
        idEditCal="editCal" idEditHidr="editHidr" idEditProt="editProt" idEditGras="editGras"
        userId={id} userData={userData} ></RegistronsInsertSoNormal>
</div>
</div>
</div>

    





);}else if(userData.user.role=="Entrenador" || userData.user.role == "Paciente"){
  return (
    <div className="registronshome">

    <div  class="row">
    <div class="registronlist">
    <RegistronsList userId={id} userData={userData}></RegistronsList>
    </div>
    </div>
    </div>
    
  );  
}
}
export default RegistronsHome;