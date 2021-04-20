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

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
import erase from '../images/erase.png'
import edit from '../images/edit.png'
import info from '../images/info.png'


class InfoRegistron extends Component {
    
    infoRegistron = event => {
        event.preventDefault()
        window.location.href = `/registrons/info/${this.props.id}`
       
    }
    
    render() {
       
        
        return  <button class="buttonlist" onClick={this.infoRegistron} ><img src={info} ></img></button>
       
    }
}

class UpdateRegistron extends Component {
    UpdateRegistron = event => {
        event.preventDefault()

        window.location.href = `/registrons/update/${this.props.id}`
    }

    render() {
        return <button class="buttonlist" onClick={this.UpdateRegistron} ><img src={edit} ></img></button>
    }
}

class DeleteRegistron extends Component {
    deleteRegistron = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar el registro con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteRegistronById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button class="buttonlist" onClick={this.deleteRegistron} ><img src={erase} ></img></button>
    }
}

class RegistronsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registrons: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        let { userId } =this.props


        await api.getRegistronsPacientById(userId).then(registrons => {

            this.setState({
                registrons: registrons.data.data,
                isLoading: false,
               
                

            })
        })
    }

   

    render() {
        const { registrons } = this.state
        const {userData} = this.props
        console.log('TCL: RegistronsList -> render -> registrons', registrons)

        let columns= []

        if(userData.user.role=='Nutricionista'){
         columns = [
            

            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy')} </div>,
                id:'dateTime',
          
            },
         
            {
                Header: 'Eliminar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteRegistron id={props.original._id} />
                        </span>
                    )
                },
            },
            
            {
                Header: 'Modificar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateRegistron id={props.original._id} />
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
                           <InfoRegistron id={props.original._id} />
                        </span>
                    )
                },
            },
        ]
    }else{

         columns = [
            

            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy')} </div>,
                id:'dateTime',
          
            },
            {
                Header: 'Estado de Ánimo',
                accessor: 'estadoAnimo',
                filterable: true,
            },
            
            {
                Header: 'Ver',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                           <InfoRegistron id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

    }

      
        
        

        return (
            <div>
            <Wrapper>
              
                    
        
              
                    <div class="reacttableaux">
                  

                    <ReactTable
                        data={registrons}
                        columns={columns}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={5}
                      
                        
                    />
                    </div>
                
            </Wrapper></div>
        )
    }
}

export default RegistronsList