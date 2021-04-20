import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import HomeFruits from './HomeFruits'
import HomeNutricionista from './HomeNutricionista'
import HomeEntrenador from './HomeEntrenador'

function Home () {
const {userData} = useContext(UserContext);
const history = useHistory();
useEffect(() => {
}, []);

if(userData.user && userData.user.role == 'Nutricionista'){
    return (
        <HomeNutricionista userData={userData} ></HomeNutricionista>
    );
}
else if(userData.user && userData.user.role == 'Entrenador'){
    return (
    <HomeEntrenador userData={userData} ></HomeEntrenador>
    );
}else if (userData.user && userData.user.role == 'Entrenador'){
    return (
    <HomeNutricionista userData={userData} ></HomeNutricionista>
    );
}else{
    return (
    <HomeFruits></HomeFruits>
    );
}


}
export default Home;