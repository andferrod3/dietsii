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

class InfoEntreno extends Component {
    infoEntreno = event => {
        event.preventDefault()
        window.location.href = `/entrenos/info/${this.props.id}`
       
    }

    render() {
        return  <button class="buttonlist" onClick={this.infoEntreno} ><img src={info} ></img></button>
    }
}

class UpdateEntreno extends Component {
    updateEntreno = event => {
        event.preventDefault()

        window.location.href = `/entrenos/update/${this.props.id}`
    }

    render() {
        return <button class="buttonlist" onClick={this.updateEntreno} ><img src={edit} ></img></button>
    }
}

class DeleteEntreno extends Component {
    deleteEntreno = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar el entreno con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteEntrenoById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button class="buttonlist" onClick={this.deleteEntreno} ><img src={erase} ></img></button>
    }
}

class EntrenosList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entrenos: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })


        await api.getAllEntrenos().then(entrenos => {

            this.setState({
                entrenos: entrenos.data.data,
                isLoading: false,


            })
        })
    }

   

    render() {
        const { entrenos } = this.state
 
        console.log('TCL: EntrenosList -> render -> entrenos', entrenos)

        


        const columns = [
            

            {
                Header: 'Nombre',
                accessor: 'name',
                filterable: true,
                id:'name',
          
            },
            {
                Header: 'Calorias',
                accessor: 'calorias',
                filterable: true,
            },
            {
                Header: 'Rutina',
                accessor: 'rutina',
                filterable: true,
            },
            
            {
                Header: 'Eliminar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteEntreno id={props.original._id} />
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
                            <UpdateEntreno id={props.original._id} />
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
                           <InfoEntreno id={props.original._id} />
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
                        data={entrenos}
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

export default EntrenosList