
import React, { Component } from 'react'
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

class FichasUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            dateTime: '', 
            age: '', 
            sex: '', 
            altura: '', 
            peso: '', 
            cintura: '', 
            cadera: '', 
            pecho: '', 
            muslo: '', 
            brazo: '', 
            alergias: '', 
            restricciones: '', 
            afecciones: '', 
            pacient: '',
        }
    }

    handleChangeInputDateTime = async event => {
        const dateTime = event.target.value
        this.setState({ dateTime })
    }

    handleChangeInputAge = async event => {
        const age = event.target.value
        this.setState({ age })
    }

    handleChangeInputSex = async event => {
        const sex = event.target.value
        this.setState({ sex })
    }

    handleChangeInputAltura = async event => {
        const altura = event.target.value
        this.setState({ altura })
    }

    handleChangeInputPeso = async event => {
        const peso = event.target.value
        this.setState({ peso })
    }

    handleChangeInputCintura = async event => {
        const cintura = event.target.value
        this.setState({ cintura })
    }

    handleChangeInputCadera = async event => {
        const cadera = event.target.value
        this.setState({ cadera })
    }

    handleChangeInputPecho = async event => {
        const pecho = event.target.value
        this.setState({ pecho })
    }

    handleChangeInputMuslo = async event => {
        const muslo = event.target.value
        this.setState({ muslo })
    }

    handleChangeInputBrazo = async event => {
        const brazo = event.target.value
        this.setState({ brazo })
    }

    handleChangeInputAlergias = async event => {
        const alergias = event.target.value
        this.setState({ alergias })
    }

    handleChangeInputRestricciones = async event => {
        const restricciones = event.target.value
        this.setState({ restricciones })
    }

    handleChangeInputAfecciones = async event => {
        const afecciones = event.target.value
        this.setState({ afecciones })
    }


    handleChangeInputPacient = async event => {
        const pacient = event.target.value
        this.setState({ pacient })
    }

    handleUpdateFicha = async () => {
        const { id, dateTime, age, sex, altura, peso, cintura, cadera, pecho, muslo, brazo, alergias, restricciones, afecciones, pacient  } = this.state
        const payload = { dateTime, age, sex, altura, peso, cintura, cadera, pecho, muslo, brazo, alergias, restricciones, afecciones, pacient  }

        await api.updateFichaById(id, payload).then(res => {
            window.alert(`Ficha modificada correctamente`)
            window.location.href = `/pacientes/info/${this.state.pacient}`
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const ficha = await api.getFichaById(id)

        this.setState({
            dateTime: ficha.data.data.dateTime,
            age: ficha.data.data.age,
            sex: ficha.data.data.sex,
            altura: ficha.data.data.altura,
            peso: ficha.data.data.peso,
            cintura: ficha.data.data.cintura,
            cadera: ficha.data.data.cadera, 
            pecho: ficha.data.data.pecho, 
            muslo: ficha.data.data.muslo,
            brazo: ficha.data.data.brazo, 
            alergias: ficha.data.data.alergias, 
            restricciones: ficha.data.data.restricciones, 
            afecciones: ficha.data.data.afecciones,
            pacient: ficha.data.data.pacient,
        })
    }

    render() {
        const { dateTime, age, sex, altura, peso, cintura, cadera, pecho, muslo, brazo, alergias, restricciones, afecciones, pacient } = this.state
        return (
            <Wrapper>
                 <div class="cardcita ucita">
        <div class="cardcita-title">
                <Title>Modificar ficha</Title>
                </div>
                <div class="updatecita">
                <Label>Edad: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={age}
                    onChange={this.handleChangeInputAge}
                />

                <Label>Sexo: </Label>
                <select class="select-css" id="sex"  onChange={this.handleChangeInputSex} >
                    <option id="" value="">---Selecciona uno---</option>
                    <option id="sex" value="Masculino">Masculino</option>
                    <option id="sex" value="Femenino">Femenino</option>
                    <option id="sex" value="Otro">Otro</option>
                </select>

                <Label>Altura: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={altura}
                    onChange={this.handleChangeInputAltura}
                />

                <Label>Peso: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={peso}
                    onChange={this.handleChangeInputPeso}
                />

                <Label>Cintura: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={cintura}
                    onChange={this.handleChangeInputCintura}
                />

                <Label>Cadera: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={cadera}
                    onChange={this.handleChangeInputCadera}
                />

                <Label>Pecho: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={pecho}
                    onChange={this.handleChangeInputPecho}
                />

                <Label>Muslo: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={muslo}
                    onChange={this.handleChangeInputMuslo}
                />
                
                <Label>Brazo: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={brazo}
                    onChange={this.handleChangeInputBrazo}
                />

                <Label>Alergias: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={alergias}
                    onChange={this.handleChangeInputAlergias}
                />

                <Label>Restricciones: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={restricciones}
                    onChange={this.handleChangeInputRestricciones}
                />

                <Label>Afecciones: </Label>
                <input
                    class="inputcita"
                    type="text"
                    value={afecciones}
                    onChange={this.handleChangeInputAfecciones}
                />
               

                <Button onClick={this.handleUpdateFicha}>Modificar ficha</Button>
                </div>
               </div>
            </Wrapper>
        )
    }
}

export default FichasUpdate
