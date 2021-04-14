import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import UserContext from '../../context/userContext';
import Chat from './Chat';
import RegistronsInsertSocket from '../paciente/RegistronsInsertSocket';
import io from 'socket.io-client';

class TextEdit extends Component {


  componentDidMount = async () => {

    const l = console.log
    const ENDPOINT = 'localhost:5000';
    const socket = io(ENDPOINT);
    function getEl(id) {
        return document.getElementById(id)
    }
    const editor = getEl(this.props.idEdit)
    editor.addEventListener("keyup", (evt) => {
    const text = editor.value
   

    socket.emit('write', text);
})


socket.on('write', data => {
  editor.value = data;
});


const editoredi = getEl(this.props.idEdi)
editoredi.addEventListener("change", (evt) => {
const texte = editoredi.value


socket.emit('write2', texte);
})

socket.on('write2', texte => {
  editoredi.value = texte;
});



}

render() {
  return(
    <div>

    <h3>Realtime Editor/Collaboration</h3>
    <form>
    <div>
        <input rows="30" cols="50" id={this.props.idEdit} placeholder="Type Your Text..."></input>
     
    </div>

    <div>
        <select rows="30" cols="50" id={this.props.idEdi} placeholder="Type Your Text..." >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
     
    </div>
    </form>
    </div>
  )
}

}

export default TextEdit