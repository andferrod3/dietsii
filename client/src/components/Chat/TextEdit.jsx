import React, { useState, useContext, Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
//import UserContext from '../../context/userContext';
import Chat from './Chat';
import RegistronsInsertSocket from '../paciente/RegistronsInsertSocket';
import io from 'socket.io-client';
import axios from 'axios';
import api from '../../api';
import RegistronsInsertSo from '../paciente/RegistronsInsertSo'
import MoviesInsert from '../../pages/MoviesInsert'

import styled from 'styled-components'
const ENDPOINT = 'https://dietsii.herokuapp.com/';
    const socket = io(ENDPOINT);

    const InputText = styled.input.attrs({
      className: 'form-control',
  })`
      margin: 5px;
  `
  

class TextEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
        dateTime:'', 
        estadoAnimo:'', 
        professional:'',
        pacient:'',
        desayunoL:'',
        mediaL:'',
        almuerzoL:'',
        meriendaL:'',
        cenaL:'',
        desayunoM:'',
        mediaM:'',
        almuerzoM:'',
        meriendaM:'',
        cenaM:'',
        desayunoX:'',
        mediaX:'',
        almuerzoX:'',
        meriendaX:'',
        cenaX:'',
        desayunoJ:'',
        mediaJ:'',
        almuerzoJ:'',
        meriendaJ:'',
        cenaJ:'',
        desayunoV:'',
        mediaV:'',
        almuerzoV:'',
        meriendaV:'',
        cenaV:'',
        desayunoS:'',
        mediaS:'',
        almuerzoS:'',
        meriendaS:'',
        cenaS:'',
        desayunoD:'',
        mediaD:'',
        almuerzoD:'',
        meriendaD:'',
        cenaD:'',
        formClassName: '',
        formSuccessMessage: '',
        formErrorMessage: ''
    }
}

handleChangeInputDateTime = async event => {
  const dateTime = event.target.value
  this.setState({ dateTime })
}

handleChangeInputEstadoAnimo = async event => {
  const estadoAnimo = event.target.value
  this.setState({ estadoAnimo })
}

handleChangeInputProfessional = async event => {
  const professional = event.target.value
  this.setState({ professional })
}

handleChangeInputPacient = async event => {
  const pacient = event.target.value
  this.setState({ pacient })
}

handleChangeInputDesayunoL = async event => {
  const desayunoL = event.target.value
  this.setState({ desayunoL })
}

handleChangeInputMediaL = async event => {
  const mediaL = event.target.value
  this.setState({ mediaL })
}

handleChangeInputAlmuerzoL = async event => {
  const almuerzoL = event.target.value
  this.setState({ almuerzoL })
}

handleChangeInputMeriendaL = async event => {
  const meriendaL = event.target.value
  this.setState({ meriendaL })
}

handleChangeInputCenaL = async event => {
  const cenaL = event.target.value
  this.setState({ cenaL })
}

handleChangeInputDesayunoM = async event => {
  const desayunoM = event.target.value
  this.setState({ desayunoM })
}

handleChangeInputMediaM = async event => {
  const mediaM = event.target.value
  this.setState({ mediaM })
}

handleChangeInputAlmuerzoM = async event => {
  const almuerzoM = event.target.value
  this.setState({ almuerzoM })
}

handleChangeInputMeriendaM = async event => {
  const meriendaM = event.target.value
  this.setState({ meriendaM })
}

handleChangeInputCenaM = async event => {
  const cenaM = event.target.value
  this.setState({ cenaM })
}

handleChangeInputDesayunoX = async event => {
  const desayunoX = event.target.value
  this.setState({ desayunoX })
}

handleChangeInputMediaX = async event => {
  const mediaX = event.target.value
  this.setState({ mediaX })
}

handleChangeInputAlmuerzoX = async event => {
  const almuerzoX = event.target.value
  this.setState({ almuerzoX })
}

handleChangeInputMeriendaX = async event => {
  const meriendaX = event.target.value
  this.setState({ meriendaX })
}

handleChangeInputCenaX = async event => {
  const cenaX = event.target.value
  this.setState({ cenaX })
}
handleChangeInputDesayunoJ = async event => {
  const desayunoJ = event.target.value
  this.setState({ desayunoJ })
}

handleChangeInputMediaJ = async event => {
  const mediaJ = event.target.value
  this.setState({ mediaJ })
}

handleChangeInputAlmuerzoJ = async event => {
  const almuerzoJ = event.target.value
  this.setState({ almuerzoJ })
}

handleChangeInputMeriendaJ = async event => {
  const meriendaJ = event.target.value
  this.setState({ meriendaJ })
}

handleChangeInputCenaJ = async event => {
  const cenaJ = event.target.value
  this.setState({ cenaJ })
}
handleChangeInputDesayunoV = async event => {
  const desayunoV = event.target.value
  this.setState({ desayunoV })
}

handleChangeInputMediaV = async event => {
  const mediaV = event.target.value
  this.setState({ mediaV })
}

handleChangeInputAlmuerzoV = async event => {
  const almuerzoV = event.target.value
  this.setState({ almuerzoV })
}

handleChangeInputMeriendaV = async event => {
  const meriendaV = event.target.value
  this.setState({ meriendaV })
}

handleChangeInputCenaV = async event => {
  const cenaV = event.target.value
  this.setState({ cenaV })
}
handleChangeInputDesayunoS = async event => {
  const desayunoS = event.target.value
  this.setState({ desayunoS })
}

handleChangeInputMediaS = async event => {
  const mediaS = event.target.value
  this.setState({ mediaS })
}

handleChangeInputAlmuerzoS = async event => {
  const almuerzoS = event.target.value
  this.setState({ almuerzoS })
}

handleChangeInputMeriendaS = async event => {
  const meriendaS = event.target.value
  this.setState({ meriendaS })
}

handleChangeInputCenaS = async event => {
  const cenaS = event.target.value
  this.setState({ cenaS })
}
handleChangeInputDesayunoD = async event => {
  const desayunoD = event.target.value
  this.setState({ desayunoD })
}

handleChangeInputMediaD = async event => {
  const mediaD = event.target.value
  this.setState({ mediaD })
}

handleChangeInputAlmuerzoD = async event => {
  const almuerzoD = event.target.value
  this.setState({ almuerzoD })
}

handleChangeInputMeriendaD = async event => {
  const meriendaD = event.target.value
  this.setState({ meriendaD })
}

handleChangeInputCenaD = async event => {
  const cenaD = event.target.value
  this.setState({ cenaD })
}


  handleCreateFicha = async () => {

    const l = console.log
    const ENDPOINT = 'https://dietsii.herokuapp.com/';
    const socket = io(ENDPOINT);

    const { dateTime, 
        estadoAnimo, 
        professional,
        pacient,
        desayunoL,
        mediaL,
        almuerzoL,
        meriendaL,
        cenaL,
        desayunoM,
        mediaM,
        almuerzoM,
        meriendaM,
        cenaM,
        desayunoX,
        mediaX,
        almuerzoX,
        meriendaX,
        cenaX,
        desayunoJ,
        mediaJ,
        almuerzoJ,
        meriendaJ,
        cenaJ,
        desayunoV,
        mediaV,
        almuerzoV,
        meriendaV,
        cenaV,
        desayunoS,
        mediaS,
        almuerzoS,
        meriendaS,
        cenaS,
        desayunoD,
        mediaD,
        almuerzoD,
        meriendaD,
        cenaD  } = this.state

        const payload = { dateTime, 
          estadoAnimo, 
          professional,
          pacient,
          desayunoL,
          mediaL,
          almuerzoL,
          meriendaL,
          cenaL,
          desayunoM,
          mediaM,
          almuerzoM,
          meriendaM,
          cenaM,
          desayunoX,
          mediaX,
          almuerzoX,
          meriendaX,
          cenaX,
          desayunoJ,
          mediaJ,
          almuerzoJ,
          meriendaJ,
          cenaJ,
          desayunoV,
          mediaV,
          almuerzoV,
          meriendaV,
          cenaV,
          desayunoS,
          mediaS,
          almuerzoS,
          meriendaS,
          cenaS,
          desayunoD,
          mediaD,
          almuerzoD,
          meriendaD,
          cenaD }
   
          await api.insertRegistron(payload).then(res => {
              window.alert(`Registro añadido correctamente`)
              this.setState( {
                dateTime:'', 
                estadoAnimo:'', 
                professional:'',
                pacient:'',
                desayunoL:'',
                mediaL:'',
                almuerzoL:'',
                meriendaL:'',
                cenaL:'',
                desayunoM:'',
                mediaM:'',
                almuerzoM:'',
                meriendaM:'',
                cenaM:'',
                desayunoX:'',
                mediaX:'',
                almuerzoX:'',
                meriendaX:'',
                cenaX:'',
                desayunoJ:'',
                mediaJ:'',
                almuerzoJ:'',
                meriendaJ:'',
                cenaJ:'',
                desayunoV:'',
                mediaV:'',
                almuerzoV:'',
                meriendaV:'',
                cenaV:'',
                desayunoS:'',
                mediaS:'',
                almuerzoS:'',
                meriendaS:'',
                cenaS:'',
                desayunoD:'',
                mediaD:'',
                almuerzoD:'',
                meriendaD:'',
                cenaD:'',
                formClassName: '',
                formSuccessMessage: '',
                formErrorMessage: ''
            })
              socket.emit('addRegistron', res.data.result);

          }) 


        /*
        api.insertRegistron(payload).then(res => {
      
        socket.emit('addRegistron', res.data.result);
  }) .catch((err) => {
    if (err.response) {
      if (err.response.data) {
        this.setState({
          formClassName: 'warning',
          formErrorMessage: err.response.data.msg
        });
      }
    }
    else {
      this.setState({
        formClassName: 'warning',
        formErrorMessage: 'Something went wrong. ' + err
      });
    }
  });
  */
}


  componentDidMount = async () => {

    const l = console.log
    const ENDPOINT = 'https://dietsii.herokuapp.com/';
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

const editor3 = getEl(this.props.idEdit3)
    editor3.addEventListener("change", (evt) => {
    const text = editor3.value
   

    socket.emit('write3', text);
})


    socket.on('write3', data => {
    editor3.value = data;
}); 

const editor4 = getEl(this.props.idEdit4)
    editor4.addEventListener("change", (evt) => {
    const text = editor4.value
   

    socket.emit('write4', text);
})


    socket.on('write4', data => {
    editor4.value = data;
}); 

}

render() {
  const { dateTime, 
    estadoAnimo, 
    professional,
    pacient,
    desayunoL,
    mediaL,
    almuerzoL,
    meriendaL,
    cenaL,
    desayunoM,
    mediaM,
    almuerzoM,
    meriendaM,
    cenaM,
    desayunoX,
    mediaX,
    almuerzoX,
    meriendaX,
    cenaX,
    desayunoJ,
    mediaJ,
    almuerzoJ,
    meriendaJ,
    cenaJ,
    desayunoV,
    mediaV,
    almuerzoV,
    meriendaV,
    cenaV,
    desayunoS,
    mediaS,
    almuerzoS,
    meriendaS,
    cenaS,
    desayunoD,
    mediaD,
    almuerzoD,
    meriendaD,
    cenaD  } = this.state
  return(
    <div>

    <h3>Realtime Editor/Collaboration</h3>
    <form>
    <div>
       
        <InputText
                    type="text"
                    value={dateTime}
                    onChange={this.handleChangeInputDateTime}
                    id={this.props.idEdit }
                />
    </div>

    <div>
        <select rows="30" cols="50" id={this.props.idEdi} onChange={this.handleChangeInputEstadoAnimo} >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      
    </div>
    <div>
        <select rows="30" cols="50" id={this.props.idEdit3} onChange={this.handleChangeInputEstadoAnimo} >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      
    </div>
    <div>
        <select rows="30" cols="50" id={this.props.idEdit4} onChange={this.handleChangeInputEstadoAnimo} >
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
      
    </div>
    <button onClick={this.handleCreateFicha} >Crear</button>
    </form>
 
   
    </div>
  )
}

}

export default TextEdit