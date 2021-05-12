import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import UserContext from '../../context/userContext';
import Chat from './Chat';
import ChatVideoCall from './ChatVideoCall'
import RegistronsInsertSocket from '../paciente/RegistronsInsertSocket';
import io from 'socket.io-client';
import TextEdit from './TextEdit';
import RegistronsInsertSo from '../paciente/RegistronsInsertSo'
import RegistroesInsertSo from '../entrenador/RegistroesInsertSo'
import './SesionHome.css';
import Room from '../videocall/Room'

const SesionPHome = ({ location }) => {
 
   
    return (
   
        <div>
            <ChatVideoCall location={location} class="chatsesion"></ChatVideoCall>
            
        </div>
       
        );
    }
    export default SesionPHome;