import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import UserContext from '../../context/userContext';
import Chat from './Chat';
import RegistronsInsertSocket from '../paciente/RegistronsInsertSocket';
import io from 'socket.io-client';
import TextEdit from './TextEdit';
import RegistronsInsertSo from '../paciente/RegistronsInsertSo'
import RegistroesInsertSo from '../entrenador/RegistroesInsertSo'
import './SesionHome.css';


const SesionPHome = ({ location }) => {
 
   
    return (
   
        <div>
            <Chat location={location} class="chatsesion"></Chat>
       
        </div>
       
        );
    }
    export default SesionPHome;