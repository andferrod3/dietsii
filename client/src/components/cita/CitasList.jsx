import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

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

class UpdateCita extends Component {
    updateCita = event => {
        event.preventDefault()

        window.location.href = `/citas/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateCita}>Modificar</Update>
    }
}

class DeleteCita extends Component {
    deleteCita = event => {
        event.preventDefault()

        if (
            window.confirm(
                `¿Quieres eliminar la cita con id ${this.props.id} permanentemente?`,
            )
        ) {
            api.deleteCitaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteCita}>Eliminar</Delete>
    }
}

class CitasList extends Component {
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

        await api.getAllCitas().then(citas => {
            this.setState({
                citas: citas.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { citas, isLoading } = this.state
        console.log('TCL: CitasList -> render -> citas', citas)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Nombre de la sesión',
                accessor: 'sessionName',
                filterable: true,
            },
            {
                Header: 'Fecha y hora',
                accessor: 'dateTime',
                filterable: true,
            },
            {
                Header: 'Paciente',
                accessor: 'pacient',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteCita id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateCita id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!citas.length) {
            showTable = false
        }

        return (
            <div>
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={citas}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper></div>
        )
    }
}

export default CitasList