import React, { Component } from 'react'

class HomeFruits extends Component {
    constructor(props){
        super(props)

    }


componentDidMount = async () => {

    const panels = document.querySelectorAll(".panel");

function panelOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', panelOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

render(){
    return(
        <div class="panels">
    <div class="panel panel1">
      <p>Entrenar</p>
      <p>Es</p>
      <p>Fácil</p>
    </div>
    <div class="panel panel2">
      <p>Cualquier</p>
      <p>Hora</p>
      <p>es buena</p>
    </div>
    <div class="panel panel3">
      <p>Come</p>
      <p>De</p>
      <p>Todo</p>
    </div>
    <div class="panel panel4">
      <p>Mejora</p>
      <p>Tu</p>
      <p>Salud</p>
    </div>
    <div class="panel panel5">
      <p>El</p>
      <p>Cambio</p>
      <p>es asegurado</p>
    </div>
  </div>
    )
}

}

export default HomeFruits