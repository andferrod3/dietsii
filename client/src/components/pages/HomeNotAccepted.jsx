import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';

class HomeNotAccepted extends Component {
    constructor(props){
        super(props)
      
    }





render(){

  
  const {userData} = this.props
    return(
      
       <div class="rainbow">

           <p class="waiting" >Hemos recibido tu solicitud correctamente,
               pero aún necesitamos que uno de nuestros profesionales te acepte
           </p>
       <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>


    )
}

}

export default HomeNotAccepted