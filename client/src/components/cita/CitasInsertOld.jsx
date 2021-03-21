import UserContext from "../../context/userContext";


import React, { Component, useContext } from 'react'
import api from '../api'

import styled from 'styled-components'




const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class CitasInsertOld extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            sessionName: '',
            dateTime: '',
            professional: userData.user.id,
            pacient: '',
        }
    }

    handleChangeInputSessionName = async event => {
        const sessionName = event.target.value
        this.setState({ sessionName })
    }

    handleChangeInputDateTime = async event => {
        const dateTime = event.target.value
        this.setState({ dateTime })
    }

    handleChangeInputProfessional = async event => {
        const professional = event.target.value
        this.setState({ professional })
    }

    handleChangeInputPacient = async event => {
        const pacient = event.target.value
        this.setState({ pacient })
    }

    handleIncludeCita = async () => {
        const { sessionName, dateTime, professional, pacient } = this.state
        const payload = { sessionName, dateTime, professional, pacient }
        

        await api.insertCita(payload).then(res => {
            window.alert(`Cita añadida correctamente`)
            this.setState({
                sessionName: '',
                dateTime: '',
                professional: '',
                pacient: '',
            })
        })
    }
    
    render() {
        const { sessionName, dateTime, professional, pacient } = this.state
        
        return (
            <Wrapper>
                <Title>Crear Cita</Title>

                <Label>Nombre de la sesión: </Label>
                <InputText
                    type="text"
                    value={sessionName}
                    onChange={this.handleChangeInputSessionName}
                />

                <Label>Fecha y hora: </Label>
                <InputText
                    type="datetime"
                    value={dateTime}
                    onChange={this.handleChangeInputDateTime}
                />

                <Label>Profesional: </Label>
                <InputText
                    type="text"
                    value={professional}
                    onChange={this.handleChangeInputProfessional}
                />

                <Label>Paciente: </Label>
                <InputText
                    type="text"
                    value={pacient}
                    onChange={this.handleChangeInputPacient}
                />

                <Button onClick={this.handleIncludeCita}>Crear cita</Button>
                <CancelButton href={'/citas/list'}>Cancelar</CancelButton>
            </Wrapper>
        )
    }
}

export default CitasInsertOld