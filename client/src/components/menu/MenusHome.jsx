import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useParams } from "react-router";
import MenusInsert from './MenusInsert'
import MenusList from './MenusList'




function MenusHome () {

const {userData} = useContext(UserContext);
const history = useHistory();

return (


<div className="menushome">

<div  class="row">
<div class="registronlist">
<MenusList ></MenusList>
</div>
<div class="registroninsert">
<MenusInsert ></MenusInsert>
</div>
</div>
</div>


);
}
export default MenusHome;