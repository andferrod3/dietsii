import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';

class HomeEntrenador extends Component {
    constructor(props){
        super(props)
        this.state= {
          history: '',
        }
    }

    componentWillMount = async () => {
      activate;
      function activate() {
        this.setState({history : useHistory()});
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

    
  }

  enviaEntrenos = event => {
    event.preventDefault()

    window.location.href = `/menus`
}

enviaSesionSocket = event => {
  event.preventDefault()

  window.location.href = `/chat/join`
}

enviaCitas = event => {
  event.preventDefault()

  window.location.href = `/citas`
}

enviaPacientes = event => {
  event.preventDefault()

  window.location.href = `/pacientes`
}

enviaSesionPacientes = event => {
  event.preventDefault()

  window.location.href = `/pchat/join`
}


render(){

  
  const {userData} = this.props
    return(
      <div class="HomeEntrenador">
          <p class="welcome" >Bienvenido {userData.user.name}</p>
      
       <div class="containere">
        <div class="panele" id="panele-six" onClick={this.enviaSesionSocket} >
        
            <h2>Sesión de Ajustes con Nutricionista</h2>
        </div>
        <div class="panele" id="panele-seven" onClick={this.enviaEntrenos} >
            <h2>Entrenos almacenadas</h2>
        </div>
        <div class="panele active" id="panele-three" onClick={this.enviaCitas}>
            <h2>Agenda y Citas</h2>
        </div>
        <div class="panele" id="panele-four" onClick={this.enviaPacientes}>
            <h2>Control de Pacientes</h2>
        </div>
        <div class="panele" id="panele-five" onClick={this.enviaSesionPacientes} >
            <h2>Sesiones deportivas</h2>
        </div>
    </div>
      </div>


    )
}

}

export default HomeEntrenador