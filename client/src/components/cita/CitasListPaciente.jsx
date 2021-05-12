import React, { Component,useContext } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import UserContext from '../../context/userContext';

import styled from 'styled-components'
import moment from 'moment'

import "react-table-6/react-table.css"
import erase from '../images/erase.png'
import edit from '../images/edit.png'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`




class CitasListPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            citas: [],
            columns: [],
            isLoading: false,
      
            
            
        }
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        let { userData } =this.props


        await api.getCitasPacientById(userData.user.id).then(citas => {

            this.setState({
                citas: citas.data.data,
                isLoading: false,
               
                

            })
        })
    }

   

    render() {
        const { citas } = this.state
        let { dateState } =this.props
        console.log('TCL: CitasList -> render -> citas', citas)

        


        const columns = [
            
            {
                Header: 'Nombre de la sesión',
                accessor: 'sessionName',
                filterable: true,
            },
            {
                Header: 'Fecha y hora',
                accessor: 'dateTime',
                filterable: true,
                Cell: props => <div> {moment(props.value).format('DD/MM/yyyy HH:mm')} </div>,
                id:'dateTime',
          
            },
  
           
        ]

      
        
        

        return (
            <div>
            <Wrapper>
              
                    
        
              
                    <div>
                  

                    <ReactTable
                        data={citas}
                        columns={columns}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={5}
                        defaultFiltered={[
                            {
                            id: 'dateTime',
                            value:moment(dateState).format('yyyy-MM-DD'),
                            }

                        ]
                        }
                    />
                    </div>
                
            </Wrapper></div>
        )
    }
}

export default CitasListPaciente