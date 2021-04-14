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

class InfoMenu extends Component {
    infoMenu = event => {
        event.preventDefault()
        window.location.href = `/menus/info/${this.props.id}`
       
    }

    render() {
        return  <button class="buttonlist" onClick={this.infoMenu} ><img src={info} ></img></button>
    }
}

class UpdateMenu extends Component {
    updateMenu = event => {
        event.preventDefault()

        window.location.href = `/menus/update/${this.props.id}`
    }

    render() {
        return <button class="buttonlist" onClick={this.updateMenu} ><img src={edit} ></img></button>
    }
}

class DeleteMenu extends Component {
    deleteMenu = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar el menu con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteMenuById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <button class="buttonlist" onClick={this.deleteMenu} ><img src={erase} ></img></button>
    }
}

class MenusList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })


        await api.getAllMenus().then(menus => {

            this.setState({
                menus: menus.data.data,
                isLoading: false,


            })
        })
    }

   

    render() {
        const { menus } = this.state
 
        console.log('TCL: MenusList -> render -> menus', menus)

        


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
                Header: 'Hidratos',
                accessor: 'hidratos',
                filterable: true,
            },
            {
                Header: 'proteinas',
                accessor: 'proteinas',
                filterable: true,
            },
            {
                Header: 'Grasas',
                accessor: 'grasas',
                filterable: true,
            },
            {
                Header: 'Eliminar',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMenu id={props.original._id} />
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
                            <UpdateMenu id={props.original._id} />
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
                           <InfoMenu id={props.original._id} />
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
                        data={menus}
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

export default MenusList