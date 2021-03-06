import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
function Home () {
const {userData} = useContext(UserContext);
const history = useHistory();
useEffect(() => {
if(!userData.user)
history.push("/login");
}, []);
return (
<div>
{userData.user ? (
<h1>Bienvenido {userData.user.name}</h1>
) : (
<>
<h2>No has iniciado sesión</h2>
<Link to="/login">Login</Link>
</>
)}
</div>
);
}
export default Home;