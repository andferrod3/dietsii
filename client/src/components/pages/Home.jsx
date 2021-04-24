import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import HomeFruits from './HomeFruits'
import HomeNutricionista from './HomeNutricionista'
import HomeEntrenador from './HomeEntrenador'
import HomePaciente from './HomePaciente'
import Async from 'react-async';
import api from '../api'

function Home () {
const {userData} = useContext(UserContext);
const history = useHistory();
useEffect(() => {
}, []);

const tieneE = () =>
    api.getAsignacionEntrenadorToPaciente(userData.user.id)
    .then(res => {return res})
const tieneN = () =>
api.getAsignacionNutricionistaToPaciente(userData.user.id)
.then(res => {return res})


if(userData.user && userData.user.role == 'Nutricionista'){
    return (
        <HomeNutricionista userData={userData} ></HomeNutricionista>
    );
}
else if(userData.user && userData.user.role == 'Entrenador'){
    return (
    <HomeEntrenador userData={userData} ></HomeEntrenador>
    );
}else if (userData.user && userData.user.role == 'Paciente'){
    
    return (
        <Async promiseFn={tieneN}>


{({ data, err}) => {
 
 if (err) return `Something went wrong: ${err.message}`

 if (data){

   let tienenu = false;
   let aceptadon = false;

  if(data.data.data.length>0){
      tienenu=true;

        aceptadon = data.data.data[0].isAccepted
  }
   
    
   return (
       
    <Async promiseFn={tieneE} >

{({ data, err}) => {
 
 if (err) return `Something went wrong: ${err.message}`

 if (data){

   let tienene = false;
   let aceptadoe = false;

  if(data.data.data.length>0){
      tienene=true;
      aceptadoe = data.data.data[0].isAccepted
  }
   
    
   return (
       

    <HomePaciente userData={userData} tienenu={tienenu} tienene={tienene} aceptadon={aceptadon} aceptadoe={aceptadoe} ></HomePaciente>

   )}
}}

  

    </Async>

   )}
}}

   
    </Async>

    );
}else{
    return (
    <HomeFruits></HomeFruits>
    );
}


}
export default Home;