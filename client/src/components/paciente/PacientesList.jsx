import React, { Component,useContext } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import UserContext from '../../context/userContext';

import styled from 'styled-components'
import moment from 'moment'

import "react-table-6/react-table.css"

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Accept = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`


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
                Header: 'Tipo',
                accessor: 'type',
                filterable: true,
            },
            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy HH:mm')} </div>,
                id:'dateTime',
          
            },
            {
                Header: 'Nombre paciente',
                accessor: 'pacient.name',
                filterable: true,
            },
            {
                Header: 'Apellidos paciente',
                accessor: 'pacient.surname',
                filterable: true,
                
            },
            {
                Header: '',
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
                            <button class="btn btn-primary aux" onClick={acceptPacient} >Aceptar</button>
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