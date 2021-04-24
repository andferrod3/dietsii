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

class InfoFicha extends Component {
    infoFicha = event => {
        event.preventDefault()
        window.location.href = `/fichas/info/${this.props.id}`
       
    }

    render() {
        return  <button class="buttonlist" onClick={this.infoFicha} ><img src={info} ></img></button>
    }
}

class UpdateFicha extends Component {
    updateFicha = event => {
        event.preventDefault()

        window.location.href = `/fichas/update/${this.props.id}`
    }

    render() {
        return <button class="buttonlist" onClick={this.updateFicha} ><img src={edit} ></img></button>
    }
}

class DeleteFicha extends Component {
    deleteFicha = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar la ficha con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteFichaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button class="buttonlist" onClick={this.deleteFicha} ><img src={erase} ></img></button>
    }
}

class FichasList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fichas: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        let { userId } =this.props


        await api.getFichasPacientById(userId).then(fichas => {

            this.setState({
                fichas: fichas.data.data,
                isLoading: false,
               
                

            })
        })
    }

   

    render() {
        const { fichas } = this.state
 
        console.log('TCL: FichasList -> render -> fichas', fichas)

        const {userData} = this.props

        let columns = []

        if(userData.user.role=='Nutricionista' || userData.user.role=="Entrenador"){

         columns = [
            

            {
                Header: 'Fecha',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy')} </div>,
                id:'dateTime',
          
            },
            {
                Header: 'Peso',
                accessor: 'peso',
                filterable: true,
            },
            {
                Header: 'Eliminar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteFicha id={props.original._id} />
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
                            <UpdateFicha id={props.original._id} />
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
                           <InfoFicha id={props.original._id} />
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
                Header: 'Peso',
                accessor: 'peso',
                filterable: true,
            },
            
            
            {
                Header: 'Ver',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                           <InfoFicha id={props.original._id} />
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
                        data={fichas}
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

export default FichasList