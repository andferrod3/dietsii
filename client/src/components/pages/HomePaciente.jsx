import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../api';

class HomeEntrenador extends Component {
    constructor(props){
        super(props)
        this.state= {
          history: '',
          asignacionE: false,
          asignacionN: false,
          
        }
    }

    componentDidMount = async () => {

      const panels = document.querySelectorAll('.panele');

      panels.forEach((panel) => {
          panel.addEventListener('mouseover', () => {
              removeActiveClasses();
              panel.classList.add('active');
          })
      })
      
      function removeActiveClasses() {
          panels.forEach(panel => {
              panel.classList.remove('active');
          })
      }

      const {userData} = this.props
      const promise = api.getAsignacionEntrenadorToPaciente(userData.user.id);
      promise.then( res => {
        this.setState({
          asignacionE: true
        },() => console.log(this.state.asignacionE))})
      const promise2 = api.getAsignacionNutricionistaToPaciente(userData.user.id);
      promise2.then( res => {
        this.setState({
          asignacionN: true
        },() => console.log(this.state.asignacionN))})
      
  }

  enviaEntrenos = event => {
    event.preventDefault()
    const {userData} = this.props

    if(this.props.tienene ){
      if(this.props.aceptadoe){
      window.location.href = `/pacientes/info/${userData.user.id}/registroes`
      }else{
        window.location.href = `/noaceptado`
      }
    }else{
      window.location.href = `/asignar/entrenador`
    }
}

enviaMenus = event => {
  event.preventDefault()
  const {userData} = this.props
  if(this.props.tienenu ){
    if(this.props.aceptadon){
    window.location.href = `/pacientes/info/${userData.user.id}/registrons`
    }else{
      window.location.href = `/noaceptado`
    }
    }else{
      window.location.href = `/asignar/nutricionista`
    }
}

enviaCitas = event => {
  event.preventDefault()

  window.location.href = `/citas`
}

enviaPacientes = event => {
  event.preventDefault()
  const {userData} = this.props
  window.location.href = `/pacientes/info/${userData.user.id}`
}

enviaSesionPacientes = event => {
  event.preventDefault()

  window.location.href = `/pchat/join`
}


render(){

  
  const {userData} = this.props
    return(
      <div class="HomeEntrenador">
          <p class="welcome" >Bienvenido/a {userData.user.name}</p>
      
       <div class="containere">
        <div class="panele" id="panele-one" onClick={this.enviaEntrenos} >
        
            <h2>Registros Deportivos</h2>
        </div>
        <div class="panele" id="panele-two" onClick={this.enviaMenus} >
            <h2>Registros Nutricionales</h2>
        </div>
        <div class="panele active" id="panele-three" onClick={this.enviaCitas}>
            <h2>Agenda y Citas</h2>
        </div>
        <div class="panele" id="panele-four" onClick={this.enviaPacientes}>
            <h2>Información personal y evolución</h2>
        </div>
        <div class="panele" id="panele-five" onClick={this.enviaSesionPacientes} >
            <h2>Sesiones con profesionales</h2>
        </div>
    </div>
      </div>


    )
}

}

export default HomeEntrenador