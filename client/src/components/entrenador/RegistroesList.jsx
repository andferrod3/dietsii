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


class InfoRegistroe extends Component {
    
    infoRegistroe = event => {
        event.preventDefault()
        window.location.href = `/registroes/info/${this.props.id}`
       
    }
    
    render() {
       
        
        return  <button class="buttonlist" onClick={this.infoRegistroe} ><img src={info} ></img></button>
       
    }
}

class UpdateRegistroe extends Component {
    UpdateRegistroe = event => {
        event.preventDefault()

        window.location.href = `/registroes/update/${this.props.id}`
    }

    render() {
        return <button class="buttonlist" onClick={this.UpdateRegistroe} ><img src={edit} ></img></button>
    }
}

class DeleteRegistroe extends Component {
    deleteRegistroe = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar el registro con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteRegistroeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button class="buttonlist" onClick={this.deleteRegistroe} ><img src={erase} ></img></button>
    }
}

class RegistroesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registroes: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        let { userId } =this.props


        await api.getRegistroesPacientById(userId).then(registroes => {

            this.setState({
                registroes: registroes.data.data,
                isLoading: false,
               
                

            })
        })
    }

   

    render() {
        const { registroes } = this.state
        const {userData} = this.props
        console.log('TCL: RegistroesList -> render -> registroes', registroes)

        let columns= []

        if(userData.user.role=='Entrenador'){
         columns = [
            

            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy')} </div>,
                id:'dateTime',
          
            },
            {
                Header: 'Dificultad',
                accessor: 'dificultad',
                filterable: true,
            },
            {
                Header: 'Eliminar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteRegistroe id={props.original._id} />
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
                           <InfoRegistroe id={props.original._id} />
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
                Header: 'Dificultad',
                accessor: 'dificultad',
                filterable: true,
            },
            
            {
                Header: 'Ver',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                           <InfoRegistroe id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

    }

      
        
        

        return (
            <div>
            <Wrapper>
              
                    
        
              
                    <div>
                  

                    <ReactTable
                        data={registroes}
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

export default RegistroesList