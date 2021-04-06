import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useParams } from "react-router";
import RegistronsInsert from './RegistronsInsert'
import RegistronsList from './RegistronsList'

import './PacientesInfo.css'



function RegistronsHome () {
const  {id} = useParams()
const {userData} = useContext(UserContext);
const history = useHistory();


  


return (


<div className="registronshome">

<div  class="row">
<div class="registronlist">
<RegistronsList userId={id}></RegistronsList>
</div>
<div class="registroninsert">
<RegistronsInsert userId={id}></RegistronsInsert>
</div>
</div>
</div>

    





);
}
export default RegistronsHome;