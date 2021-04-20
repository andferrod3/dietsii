
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

class RegistronsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            dateTime:'', 
            estadoAnimo:'', 
            professional:'',
            pacient:'',
            desayunoL:'',
            mediaL:'',
            almuerzoL:'',
            meriendaL:'',
            cenaL:'',
            desayunoM:'',
            mediaM:'',
            almuerzoM:'',
            meriendaM:'',
            cenaM:'',
            desayunoX:'',
            mediaX:'',
            almuerzoX:'',
            meriendaX:'',
            cenaX:'',
            desayunoJ:'',
            mediaJ:'',
            almuerzoJ:'',
            meriendaJ:'',
            cenaJ:'',
            desayunoV:'',
            mediaV:'',
            almuerzoV:'',
            meriendaV:'',
            cenaV:'',
            desayunoS:'',
            mediaS:'',
            almuerzoS:'',
            meriendaS:'',
            cenaS:'',
            desayunoD:'',
            mediaD:'',
            almuerzoD:'',
            meriendaD:'',
            cenaD:'',
        }
    }

    handleChangeInputDateTime = async event => {
        const dateTime = event.target.value
        this.setState({ dateTime })
    }

    handleChangeInputEstadoAnimo = async event => {
        const estadoAnimo = event.target.value
        this.setState({ estadoAnimo })
    }

    handleChangeInputProfessional = async event => {
        const professional = event.target.value
        this.setState({ professional })
    }

    handleChangeInputPacient = async event => {
        const pacient = event.target.value
        this.setState({ pacient })
    }

    handleChangeInputDesayunoL = async event => {
        const desayunoL = event.target.value
        this.setState({ desayunoL })
    }

    handleChangeInputMediaL = async event => {
        const mediaL = event.target.value
        this.setState({ mediaL })
    }

    handleChangeInputAlmuerzoL = async event => {
        const almuerzoL = event.target.value
        this.setState({ almuerzoL })
    }

    handleChangeInputMeriendaL = async event => {
        const meriendaL = event.target.value
        this.setState({ meriendaL })
    }

    handleChangeInputCenaL = async event => {
        const cenaL = event.target.value
        this.setState({ cenaL })
    }

    handleChangeInputDesayunoM = async event => {
        const desayunoM = event.target.value
        this.setState({ desayunoM })
    }

    handleChangeInputMediaM = async event => {
        const mediaM = event.target.value
        this.setState({ mediaM })
    }

    handleChangeInputAlmuerzoM = async event => {
        const almuerzoM = event.target.value
        this.setState({ almuerzoM })
    }

    handleChangeInputMeriendaM = async event => {
        const meriendaM = event.target.value
        this.setState({ meriendaM })
    }

    handleChangeInputCenaM = async event => {
        const cenaM = event.target.value
        this.setState({ cenaM })
    }

    handleChangeInputDesayunoX = async event => {
        const desayunoX = event.target.value
        this.setState({ desayunoX })
    }

    handleChangeInputMediaX = async event => {
        const mediaX = event.target.value
        this.setState({ mediaX })
    }

    handleChangeInputAlmuerzoX = async event => {
        const almuerzoX = event.target.value
        this.setState({ almuerzoX })
    }

    handleChangeInputMeriendaX = async event => {
        const meriendaX = event.target.value
        this.setState({ meriendaX })
    }

    handleChangeInputCenaX = async event => {
        const cenaX = event.target.value
        this.setState({ cenaX })
    }
    handleChangeInputDesayunoJ = async event => {
        const desayunoJ = event.target.value
        this.setState({ desayunoJ })
    }

    handleChangeInputMediaJ = async event => {
        const mediaJ = event.target.value
        this.setState({ mediaJ })
    }

    handleChangeInputAlmuerzoJ = async event => {
        const almuerzoJ = event.target.value
        this.setState({ almuerzoJ })
    }

    handleChangeInputMeriendaJ = async event => {
        const meriendaJ = event.target.value
        this.setState({ meriendaJ })
    }

    handleChangeInputCenaJ = async event => {
        const cenaJ = event.target.value
        this.setState({ cenaJ })
    }
    handleChangeInputDesayunoV = async event => {
        const desayunoV = event.target.value
        this.setState({ desayunoV })
    }

    handleChangeInputMediaV = async event => {
        const mediaV = event.target.value
        this.setState({ mediaV })
    }

    handleChangeInputAlmuerzoV = async event => {
        const almuerzoV = event.target.value
        this.setState({ almuerzoV })
    }

    handleChangeInputMeriendaV = async event => {
        const meriendaV = event.target.value
        this.setState({ meriendaV })
    }

    handleChangeInputCenaV = async event => {
        const cenaV = event.target.value
        this.setState({ cenaV })
    }
    handleChangeInputDesayunoS = async event => {
        const desayunoS = event.target.value
        this.setState({ desayunoS })
    }

    handleChangeInputMediaS = async event => {
        const mediaS = event.target.value
        this.setState({ mediaS })
    }

    handleChangeInputAlmuerzoS = async event => {
        const almuerzoS = event.target.value
        this.setState({ almuerzoS })
    }

    handleChangeInputMeriendaS = async event => {
        const meriendaS = event.target.value
        this.setState({ meriendaS })
    }

    handleChangeInputCenaS = async event => {
        const cenaS = event.target.value
        this.setState({ cenaS })
    }
    handleChangeInputDesayunoD = async event => {
        const desayunoD = event.target.value
        this.setState({ desayunoD })
    }

    handleChangeInputMediaD = async event => {
        const mediaD = event.target.value
        this.setState({ mediaD })
    }

    handleChangeInputAlmuerzoD = async event => {
        const almuerzoD = event.target.value
        this.setState({ almuerzoD })
    }

    handleChangeInputMeriendaD = async event => {
        const meriendaD = event.target.value
        this.setState({ meriendaD })
    }

    handleChangeInputCenaD = async event => {
        const cenaD = event.target.value
        this.setState({ cenaD })
    }

   

    

    handleUpdateFicha = async () => {
        const { id, dateTime, 
            estadoAnimo, 
            professional,
            pacient,
            desayunoL,
            mediaL,
            almuerzoL,
            meriendaL,
            cenaL,
            desayunoM,
            mediaM,
            almuerzoM,
            meriendaM,
            cenaM,
            desayunoX,
            mediaX,
            almuerzoX,
            meriendaX,
            cenaX,
            desayunoJ,
            mediaJ,
            almuerzoJ,
            meriendaJ,
            cenaJ,
            desayunoV,
            mediaV,
            almuerzoV,
            meriendaV,
            cenaV,
            desayunoS,
            mediaS,
            almuerzoS,
            meriendaS,
            cenaS,
            desayunoD,
            mediaD,
            almuerzoD,
            meriendaD,
            cenaD  } = this.state
        const payload = { dateTime, 
            estadoAnimo, 
            professional,
            pacient,
            desayunoL,
            mediaL,
            almuerzoL,
            meriendaL,
            cenaL,
            desayunoM,
            mediaM,
            almuerzoM,
            meriendaM,
            cenaM,
            desayunoX,
            mediaX,
            almuerzoX,
            meriendaX,
            cenaX,
            desayunoJ,
            mediaJ,
            almuerzoJ,
            meriendaJ,
            cenaJ,
            desayunoV,
            mediaV,
            almuerzoV,
            meriendaV,
            cenaV,
            desayunoS,
            mediaS,
            almuerzoS,
            meriendaS,
            cenaS,
            desayunoD,
            mediaD,
            almuerzoD,
            meriendaD,
            cenaD  }

        await api.updateRegistronById(id, payload).then(res => {
            window.alert(`Registro nutricional modificado correctamente`)
            window.location.href = `/pacientes/info/${this.state.pacient}/registrons`
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const registron = await api.getRegistronById(id)

        this.setState({
            dateTime: registron.data.data.dateTime,
            estadoAnimo:registron.data.data.estadoAnimo, 
            professional:registron.data.data.professional,
            pacient:registron.data.data.pacient,
            desayunoL:registron.data.data.desayunoL,
            mediaL:registron.data.data.mediaL,
            almuerzoL:registron.data.data.almuerzoL,
            meriendaL:registron.data.data.meriendaL,
            cenaL:registron.data.data.cenaL,
            desayunoM:registron.data.data.desayunoM,
            mediaM:registron.data.data.mediaM,
            almuerzoM:registron.data.data.almuerzoM,
            meriendaM:registron.data.data.meriendaM,
            cenaM:registron.data.data.cenaM,
            desayunoX:registron.data.data.desayunoX,
            mediaX:registron.data.data.mediaX,
            almuerzoX:registron.data.data.almuerzoX,
            meriendaX:registron.data.data.meriendaX,
            cenaX:registron.data.data.cenaX,
            desayunoJ:registron.data.data.desayunoJ,
            mediaJ:registron.data.data.mediaJ,
            almuerzoJ:registron.data.data.almuerzoJ,
            meriendaJ:registron.data.data.meriendaJ,
            cenaJ:registron.data.data.cenaJ,
            desayunoV:registron.data.data.desayunoV,
            mediaV:registron.data.data.mediaV,
            almuerzoV:registron.data.data.almuerzoV,
            meriendaV:registron.data.data.meriendaV,
            cenaV:registron.data.data.cenaV,
            desayunoS:registron.data.data.desayunoS,
            mediaS:registron.data.data.mediaS,
            almuerzoS:registron.data.data.almuerzoS,
            meriendaS:registron.data.data.meriendaS,
            cenaS:registron.data.data.cenaS,
            desayunoD:registron.data.data.desayunoD,
            mediaD:registron.data.data.mediaD,
            almuerzoD:registron.data.data.almuerzoD,
            meriendaD:registron.data.data.meriendaD,
            cenaD:registron.data.data.cenaD,
        })
    }

    render() {
        const { dateTime, 
            estadoAnimo, 
            professional,
            pacient,
            desayunoL,
            mediaL,
            almuerzoL,
            meriendaL,
            cenaL,
            desayunoM,
            mediaM,
            almuerzoM,
            meriendaM,
            cenaM,
            desayunoX,
            mediaX,
            almuerzoX,
            meriendaX,
            cenaX,
            desayunoJ,
            mediaJ,
            almuerzoJ,
            meriendaJ,
            cenaJ,
            desayunoV,
            mediaV,
            almuerzoV,
            meriendaV,
            cenaV,
            desayunoS,
            mediaS,
            almuerzoS,
            meriendaS,
            cenaS,
            desayunoD,
            mediaD,
            almuerzoD,
            meriendaD,
            cenaD  } = this.state
        return (
            <Wrapper>
                <Title>Modificar el registro</Title>

                <Label>Estado de ánimo: </Label>
                <select value={estadoAnimo}  onChange={e => this.setState({estadoAnimo: e.target.value})} >
                    <option value="Motivado">Motivado</option>
                    <option value="Desilusionado">Desilusionado</option>
                    <option value="Cansado">Cansado</option>
                    <option value="Vigorizado">Vigorizado</option>
                    <option value="Hambriento">Hambriento</option>
                </select>

                <Label>Desayuno lunes: </Label>
                <InputText
                    type="text"
                    value={desayunoL}
                    onChange={this.handleChangeInputDesayunoL}
                />

                <Label>Media mañana lunes: </Label>
                <InputText
                    type="text"
                    value={mediaL}
                    onChange={this.handleChangeInputMediaL}
                />

                <Label>Almuerzo lunes: </Label>
                <InputText
                    type="text"
                    value={almuerzoL}
                    onChange={this.handleChangeInputAlmuerzoL}
                />

                <Label>Merienda lunes: </Label>
                <InputText
                    type="text"
                    value={meriendaL}
                    onChange={this.handleChangeInputMeriendaL}
                />

                <Label>Cena lunes: </Label>
                <InputText
                    type="text"
                    value={cenaL}
                    onChange={this.handleChangeInputCenaL}
                />

                <Label>Desayuno martes: </Label>
                <InputText
                    type="text"
                    value={desayunoM}
                    onChange={this.handleChangeInputDesayunoM}
                />

                <Label>Media mañana martes: </Label>
                <InputText
                    type="text"
                    value={mediaM}
                    onChange={this.handleChangeInputMediaM}
                />

                <Label>Almuerzo martes: </Label>
                <InputText
                    type="text"
                    value={almuerzoM}
                    onChange={this.handleChangeInputAlmuerzoM}
                />

                <Label>Merienda martes: </Label>
                <InputText
                    type="text"
                    value={meriendaM}
                    onChange={this.handleChangeInputMeriendaM}
                />

                <Label>Cena martes: </Label>
                <InputText
                    type="text"
                    value={cenaM}
                    onChange={this.handleChangeInputCenaM}
                />
                <Label>Desayuno miércoles: </Label>
                <InputText
                    type="text"
                    value={desayunoX}
                    onChange={this.handleChangeInputDesayunoX}
                />

                <Label>Media mañana miércoles: </Label>
                <InputText
                    type="text"
                    value={mediaX}
                    onChange={this.handleChangeInputMediaX}
                />

                <Label>Almuerzo miércoles: </Label>
                <InputText
                    type="text"
                    value={almuerzoX}
                    onChange={this.handleChangeInputAlmuerzoX}
                />

                <Label>Merienda miércoles: </Label>
                <InputText
                    type="text"
                    value={meriendaX}
                    onChange={this.handleChangeInputMeriendaX}
                />

                <Label>Cena miércoles: </Label>
                <InputText
                    type="text"
                    value={cenaX}
                    onChange={this.handleChangeInputCenaX}
                />
                <Label>Desayuno jueves: </Label>
                <InputText
                    type="text"
                    value={desayunoJ}
                    onChange={this.handleChangeInputDesayunoJ}
                />

                <Label>Media mañana jueves: </Label>
                <InputText
                    type="text"
                    value={mediaJ}
                    onChange={this.handleChangeInputMediaJ}
                />

                <Label>Almuerzo jueves: </Label>
                <InputText
                    type="text"
                    value={almuerzoJ}
                    onChange={this.handleChangeInputAlmuerzoJ}
                />

                <Label>Merienda jueves: </Label>
                <InputText
                    type="text"
                    value={meriendaJ}
                    onChange={this.handleChangeInputMeriendaJ}
                />

                <Label>Cena jueves: </Label>
                <InputText
                    type="text"
                    value={cenaJ}
                    onChange={this.handleChangeInputCenaJ}
                />
                <Label>Desayuno viernes: </Label>
                <InputText
                    type="text"
                    value={desayunoV}
                    onChange={this.handleChangeInputDesayunoV}
                />

                <Label>Media mañana viernes: </Label>
                <InputText
                    type="text"
                    value={mediaV}
                    onChange={this.handleChangeInputMediaV}
                />

                <Label>Almuerzo viernes: </Label>
                <InputText
                    type="text"
                    value={almuerzoV}
                    onChange={this.handleChangeInputAlmuerzoV}
                />

                <Label>Merienda viernes: </Label>
                <InputText
                    type="text"
                    value={meriendaV}
                    onChange={this.handleChangeInputMeriendaV}
                />

                <Label>Cena sábado: </Label>
                <InputText
                    type="text"
                    value={cenaS}
                    onChange={this.handleChangeInputCenaS}
                />
                <Label>Desayuno sábado: </Label>
                <InputText
                    type="text"
                    value={desayunoS}
                    onChange={this.handleChangeInputDesayunoS}
                />

                <Label>Media mañana sábado: </Label>
                <InputText
                    type="text"
                    value={mediaS}
                    onChange={this.handleChangeInputMediaS}
                />

                <Label>Almuerzo sábado: </Label>
                <InputText
                    type="text"
                    value={almuerzoS}
                    onChange={this.handleChangeInputAlmuerzoS}
                />

                <Label>Merienda sábado: </Label>
                <InputText
                    type="text"
                    value={meriendaS}
                    onChange={this.handleChangeInputMeriendaS}
                />

                <Label>Cena sábado: </Label>
                <InputText
                    type="text"
                    value={cenaS}
                    onChange={this.handleChangeInputCenaS}
                />
                <Label>Desayuno domingo: </Label>
                <InputText
                    type="text"
                    value={desayunoD}
                    onChange={this.handleChangeInputDesayunoD}
                />

                <Label>Media mañana domingo: </Label>
                <InputText
                    type="text"
                    value={mediaD}
                    onChange={this.handleChangeInputMediaD}
                />

                <Label>Almuerzo domingo: </Label>
                <InputText
                    type="text"
                    value={almuerzoD}
                    onChange={this.handleChangeInputAlmuerzoD}
                />

                <Label>Merienda domingo: </Label>
                <InputText
                    type="text"
                    value={meriendaD}
                    onChange={this.handleChangeInputMeriendaD}
                />

                <Label>Cena domingo: </Label>
                <InputText
                    type="text"
                    value={cenaD}
                    onChange={this.handleChangeInputCenaD}
                />

                

                <Button onClick={this.handleUpdateFicha}>Modificar ficha</Button>
     
            </Wrapper>
        )
    }
}

export default RegistronsUpdate
