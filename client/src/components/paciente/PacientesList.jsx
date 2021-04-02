import React, { Component,useContext } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import UserContext from '../../context/userContext';

import styled from 'styled-components'
import moment from 'moment'

import checked from '../images/checked.png'
import erase from '../images/erase.png'
import info from '../images/info.png'

import "react-table-6/react-table.css"

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Accept = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Info = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

class InfoPacient extends Component {
    infoPacient = event => {
        event.preventDefault()
        api.getAsignacionById(this.props.id).then((result) => {
            window.location.href = `/pacientes/info/${result.data.data.pacient}`}
        );
       
    }

    render() {
        return  <button class="buttonlist" onClick={this.infoPacient} ><img src={info} ></img></button>
    }
}

class AcceptPacient extends Component{
    acceptPacient = event => {
        event.preventDefault()

        if(window.confirm(`
            ¿Quieres aceptar al paciente?`)){
                api.acceptAsignacionById(this.props.id)
                window.location.reload()
            }
    }
    render(){
        return <Accept onClik={this.acceptPacient}>Aceptar</Accept>
    }
}

class PacientesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asignaciones: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        let { userData } =this.props


        await api.getAllAsignacionesNotAccepted().then(asignaciones => {

            this.setState({
                asignaciones: asignaciones.data.data,
                isLoading: false,
               
                

            })
        })
    }

   

    render() {
        const { asignaciones, isLoading } = this.state
        //let { dateState } =this.props
        let { userData } =this.props
        console.log('TCL: PacientesList -> render -> asignaciones', asignaciones)

        


        const columns = [
            {
                Header: 'Nombre',
                accessor: 'pacient.name',
                filterable: true,
            },
            {
                Header: 'Apellidos',
                accessor: 'pacient.surname',
                filterable: true,
                
            },
            
           
            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy')} </div>,
                id:'dateTime',
          
            },

            {
                Header: 'Descripción',
                accessor: 'description',
                filterable: true,
            },
            
            {
                Header: 'Aceptar',
                accessor: '',
                Cell: function(props) {
                    
                    const payload = { professional: userData.user.id }
                   const acceptPacient = event => {
                        event.preventDefault()
                
                        if(window.confirm(`
                            ¿Quieres aceptar al paciente?`)){
                                api.acceptAsignacionById(props.original._id, payload)
                                window.location.reload()
                            }
                    }
                    return (
                        <span>
                            <button class="buttonlist" onClick={acceptPacient} ><img src={checked} ></img></button>
                        </span>
                    )
                },
            },

            {
                Header: 'Ver',
                accessor: '',
                Cell: function(props) {
                    
                   
                    return (
                        <span>
                            <InfoPacient id={props.original._id} />
                        </span>
                    )
                },
            },
            
            
        ]



        return (
            <div>
            <Wrapper>
                
                    
        
              
                    <div>
                  

                    <ReactTable
                        data={asignaciones}
                        columns={columns}
                   
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={10}
                        
                    />
                    </div>
              
            </Wrapper></div>
        )
    }
}

export default PacientesList