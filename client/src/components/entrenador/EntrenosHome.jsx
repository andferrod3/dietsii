import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useParams } from "react-router";
import EntrenosInsert from './EntrenosInsert'
import EntrenosList from './EntrenosList'




function EntrenosHome () {

const {userData} = useContext(UserContext);
const history = useHistory();

return (


<div className="menushome">

<div  class="row">
<div class="registronlist">
<EntrenosList ></EntrenosList>
</div>
<div class="registroninsert">
<EntrenosInsert ></EntrenosInsert>
</div>
</div>
</div>


);
}
export default EntrenosHome;