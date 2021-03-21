import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import noPermision from './noPermision.png';
import './NoPermision.css'
function NoPermision () {
const {userData} = useContext(UserContext);
const history = useHistory();

useEffect(() => {
}, []);
return (
<div>

<img class="noPermision" src={noPermision} width="500" height="500" />

</div>
);
}
export default NoPermision;