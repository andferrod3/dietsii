import React, { useState, useContext,Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import styled from 'styled-components'
import { useParams } from "react-router";
import io from 'socket.io-client';
import { Message, Button, Form, Select } from 'semantic-ui-react';


const ENDPOINT = 'https://dietsii.herokuapp.com/';


class RegistronsInsertSocket extends Component {

    constructor(props) {
      super(props);
      
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
  
      this.handleInputChange = this.handleInputChange.bind(this);
     // this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeInputDateTime = async event => {
        const dateTime = event.target.value
        this.setState({ dateTime })
    }

    handleChangeInputEstadoAnimo = async event => {
        const estadoAnimo = event.target.value
        this.setState({ estadoAnimo })
    }

  
    handleInputChange(e) {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({ [name]: value });
    }
  
    /*
    handleSelectChange(e, data) {
      this.setState({ gender: data.value });
    }
    */
  
    handleSubmit(e) {
      // Prevent browser refresh
      e.preventDefault();
  
      const registron = {
        dateTime: this.state.dateTime,
            estadoAnimo:this.state.estadoAnimo, 
            /*professional:this.state.professional,
            pacient:this.state.pacient,
            desayunoL:this.state.desayunoL,
            mediaL:this.state.mediaL,
            almuerzoL:this.state.almuerzoL,
            meriendaL:this.state.meriendaL,
            cenaL:this.statecenaL,
            desayunoM:this.state.desayunoM,
            mediaM:this.state.mediaM,
            almuerzoM:this.state.almuerzoM,
            meriendaM:this.state.meriendaM,
            cenaM:this.state.cenaM,
            desayunoX:this.state.desayunoX,
            mediaX:this.state.mediaX,
            almuerzoX:this.state.almuerzoX,
            meriendaX:this.state.data.meriendaX,
            cenaX:this.state.cenaX,
            desayunoJ:this.state.desayunoJ,
            mediaJ:this.state.mediaJ,
            almuerzoJ:this.state.almuerzoJ,
            meriendaJ:this.state.meriendaJ,
            cenaJ:this.state.cenaJ,
            desayunoV:this.state.desayunoV,
            mediaV:this.state.mediaV,
            almuerzoV:this.state.almuerzoV,
            meriendaV:this.state.meriendaV,
            cenaV:this.state.cenaV,
            desayunoS:this.state.desayunoS,
            mediaS:this.state.mediaS,
            almuerzoS:this.state.almuerzoS,
            meriendaS:this.state.meriendaS,
            cenaS:this.state.cenaS,
            desayunoD:this.state.desayunoD,
            mediaD:this.state.mediaD,
            almuerzoD:this.state.almuerzoD,
            meriendaD:this.state.meriendaD,
            cenaD:this.state.cenaD,*/
      }
  
  
        api.insertRegistron(registron)
      .then((response) => {
        this.setState({
          formClassName: 'success',
          formSuccessMessage: response.data.msg
        });
  
          this.setState({
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
          });
         
          this.props.socket.emit('addRegistron', response.data.result);
        
        
      })
      .catch((err) => {
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
    }
  
    render() {
  
      const formClassName = this.state.formClassName;
      const formSuccessMessage = this.state.formSuccessMessage;
      const formErrorMessage = this.state.formErrorMessage;
  
      return (
        <Form className={formClassName} onSubmit={this.handleSubmit}>
          <Form.Input
            label='Fecha'
            type='date'
            placeholder='4/4/4'
            name='name'
            required
            value={this.state.dateTime}
            onChange={this.handleChangeInputDateTime}
          />
          <Form.Input
            label='Estado de ánimo'
            type='text'
            placeholder='elonmusk@tesla.com'
            name='text'
            maxLength='40'
            required
            value={this.state.estadoAnimo}
            onChange={this.handleChangeInputEstadoAnimo}
          />
          
          <Message
            success
            color='green'
            header='Nice one!'
            content={formSuccessMessage}
          />
          <Message
            warning
            color='yellow'
            header='Woah!'
            content={formErrorMessage}
          />
          <Button  floated='right'>Hola</Button>
          <br /><br /> {/* Yikes! Deal with Semantic UI React! */}
        </Form>
      );
    }
  }
  
  export default RegistronsInsertSocket;