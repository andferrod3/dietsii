
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import io from 'socket.io-client';
import Async from 'react-async';
import Select from 'react-select';


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

class RegistronsInsertSo extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            dateTime:'', 
            estadoAnimo:'', 
            professional:this.props.userData.user.id,
            pacient:this.props.userId,
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
            menus:[],
            objetivoCal: '',
            objetivoHidr: '',
            objetivoProt: '',
            objetivoGras: '',
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

  /* handleChangeInputProfessional = async () => {

        this.setState({ professional:  })
    }

    handleChangeInputPacient = async () => {
      
        this.setState({ pacient:  })
    }
*/
    handleChangeInputDesayunoL = async (selectedOption) => {
        this.setState({ desayunoL:  selectedOption})
        
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

    handleChangeObjetivoCalorico = async event => {
        const objetivoCal = event.target.value
        this.setState({ objetivoCal })
    }

    handleChangeObjetivoHidrato = async event => {
        const objetivoHidr = event.target.value
        this.setState({ objetivoHidr })
    }


    handleChangeObjetivoProteico = async event => {
        const objetivoProt = event.target.value
        this.setState({ objetivoProt })
    }


    handleChangeObjetivoGraso = async event => {
        const objetivoGras = event.target.value
        this.setState({ objetivoGras })
    }


   
    handleComprobarCalorias = async () => {
        const ENDPOINT = 'localhost:5000';
        const socket = io(ENDPOINT);
        const lunes = [this.state.desayunoL, this.state.mediaL, this.state.almuerzoL, this.state.meriendaL, this.state.cenaL];
        const martes = [this.state.desayunoM, this.state.mediaM, this.state.almuerzoM, this.state.meriendaM, this.state.cenaM];
        const miercoles = [this.state.desayunoX, this.state.mediaX, this.state.almuerzoX, this.state.meriendaX, this.state.cenaX];
        const jueves = [this.state.desayunoJ, this.state.mediaJ, this.state.almuerzoJ, this.state.meriendaJ, this.state.cenaJ];
        const viernes = [this.state.desayunoV, this.state.mediaV, this.state.almuerzoV, this.state.meriendaV, this.state.cenaV];
        const sabado = [this.state.desayunoS, this.state.mediaS, this.state.almuerzoS, this.state.meriendaS, this.state.cenaS];
        const domingo = [this.state.desayunoD, this.state.mediaD, this.state.almuerzoD, this.state.meriendaD, this.state.cenaD];

        var sumL  = 0
        var hidratL= 0.0, protL= 0.0, grasL = 0.0
        var sumM = 0, hidratM= 0.0, protM= 0.0, grasM= 0.0
        var sumX= 0, hidratX= 0.0, protX= 0.0, grasX = 0.0
        var sumJ= 0, hidratJ= 0.0, protJ= 0.0, grasJ = 0.0
        var sumV= 0, hidratV= 0.0, protV= 0.0, grasV = 0.0
        var sumS= 0, hidratS= 0.0, protS= 0.0, grasS = 0.0
        var sumD= 0, hidratD= 0.0, protD= 0.0, grasD = 0.0

        for(var i=0; i<7; i++){
            await api.getMenuById(lunes[i]).then(res => {
                sumL = sumL +  parseInt(res.data.data.calorias)
                hidratL = hidratL +  parseFloat(res.data.data.hidratos)
                protL = protL +  parseFloat(res.data.data.proteinas)
                grasL = grasL +  parseFloat(res.data.data.grasas)
                var colorCal, colorHidr, colorProt,colorGras
                if(sumL>parseInt(this.state.objetivoCal)+100){
                    colorCal = '#ff5f5f'
                }else if(sumL<parseInt(this.state.objetivoCal)-100){
                    colorCal = '#f1dd49'
                }else{
                    colorCal = '#79bd46'
                }
                if(hidratL>parseFloat(this.state.objetivoHidr)+10){
                    colorHidr = '#ff5f5f'
                }else if(hidratL<parseFloat(this.state.objetivoHidr)-10){
                    colorHidr = '#f1dd49'
                }else{
                    colorHidr = '#79bd46'
                }
                if(protL>parseFloat(this.state.objetivoProt)+10){
                    colorProt = '#ff5f5f'
                }else if(protL<parseFloat(this.state.objetivoProt)-10){
                    colorProt = '#f1dd49'
                }else{
                    colorProt = '#79bd46'
                }
                if(grasL>parseFloat(this.state.objetivoGras)+10){
                    colorGras = '#ff5f5f'
                }else if(grasL<parseFloat(this.state.objetivoGras)-10){
                    colorGras = '#f1dd49'
                }else{
                    colorGras = '#79bd46'
                }
               var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumL) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratL)
               + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protL) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasL); +'</p>'
               socket.emit('clicked', aux);
        })

        await api.getMenuById(martes[i]).then(res => {
            sumM = sumM +  parseInt(res.data.data.calorias)
            hidratM = hidratM +  parseFloat(res.data.data.hidratos)
            protM = protM +  parseFloat(res.data.data.proteinas)
            grasM = grasM +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
            if(sumM>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumM<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            if(hidratM>parseFloat(this.state.objetivoHidr)+10){
                colorHidr = '#ff5f5f'
            }else if(hidratM<parseFloat(this.state.objetivoHidr)-10){
                colorHidr = '#f1dd49'
            }else{
                colorHidr = '#79bd46'
            }
            if(protM>parseFloat(this.state.objetivoProt)+10){
                colorProt = '#ff5f5f'
            }else if(protM<parseFloat(this.state.objetivoProt)-10){
                colorProt = '#f1dd49'
            }else{
                colorProt = '#79bd46'
            }
            if(grasM>parseFloat(this.state.objetivoGras)+10){
                colorGras = '#ff5f5f'
            }else if(grasM<parseFloat(this.state.objetivoGras)-10){
                colorGras = '#f1dd49'
            }else{
                colorGras = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumM) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratM)
           + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protM) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasM); +'</p>'
           socket.emit('clicked2', aux);
        })

        await api.getMenuById(miercoles[i]).then(res => {
            sumX = sumX +  parseInt(res.data.data.calorias)
            hidratX = hidratX +  parseFloat(res.data.data.hidratos)
            protX = protX +  parseFloat(res.data.data.proteinas)
            grasX = grasX +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
                if(sumX>parseInt(this.state.objetivoCal)+100){
                    colorCal = '#ff5f5f'
                }else if(sumX<parseInt(this.state.objetivoCal)-100){
                    colorCal = '#f1dd49'
                }else{
                    colorCal = '#79bd46'
                }
                if(hidratX>parseFloat(this.state.objetivoHidr)+10){
                    colorHidr = '#ff5f5f'
                }else if(hidratX<parseFloat(this.state.objetivoHidr)-10){
                    colorHidr = '#f1dd49'
                }else{
                    colorHidr = '#79bd46'
                }
                if(protX>parseFloat(this.state.objetivoProt)+10){
                    colorProt = '#ff5f5f'
                }else if(protX<parseFloat(this.state.objetivoProt)-10){
                    colorProt = '#f1dd49'
                }else{
                    colorProt = '#79bd46'
                }
                if(grasX>parseFloat(this.state.objetivoGras)+10){
                    colorGras = '#ff5f5f'
                }else if(grasX<parseFloat(this.state.objetivoGras)-10){
                    colorGras = '#f1dd49'
                }else{
                    colorGras = '#79bd46'
                }
               var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumX) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratX)
               + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protX) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasX); +'</p>'
               socket.emit('clicked3', aux);
        })

        await api.getMenuById(jueves[i]).then(res => {
            sumJ = sumJ +  parseInt(res.data.data.calorias)
            hidratJ = hidratJ +  parseFloat(res.data.data.hidratos)
            protJ = protJ +  parseFloat(res.data.data.proteinas)
            grasJ = grasJ +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
            if(sumJ>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumJ<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            if(hidratJ>parseFloat(this.state.objetivoHidr)+10){
                colorHidr = '#ff5f5f'
            }else if(hidratJ<parseFloat(this.state.objetivoHidr)-10){
                colorHidr = '#f1dd49'
            }else{
                colorHidr = '#79bd46'
            }
            if(protJ>parseFloat(this.state.objetivoProt)+10){
                colorProt = '#ff5f5f'
            }else if(protJ<parseFloat(this.state.objetivoProt)-10){
                colorProt = '#f1dd49'
            }else{
                colorProt = '#79bd46'
            }
            if(grasJ>parseFloat(this.state.objetivoGras)+10){
                colorGras = '#ff5f5f'
            }else if(grasJ<parseFloat(this.state.objetivoGras)-10){
                colorGras = '#f1dd49'
            }else{
                colorGras = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumJ) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratJ)
           + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protJ) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasJ); +'</p>'
           socket.emit('clicked4', aux);
        })

        await api.getMenuById(viernes[i]).then(res => {
            sumV = sumV +  parseInt(res.data.data.calorias)
            hidratV = hidratV +  parseFloat(res.data.data.hidratos)
            protV = protV +  parseFloat(res.data.data.proteinas)
            grasV = grasV +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
            if(sumV>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumV<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            if(hidratV>parseFloat(this.state.objetivoHidr)+10){
                colorHidr = '#ff5f5f'
            }else if(hidratV<parseFloat(this.state.objetivoHidr)-10){
                colorHidr = '#f1dd49'
            }else{
                colorHidr = '#79bd46'
            }
            if(protV>parseFloat(this.state.objetivoProt)+10){
                colorProt = '#ff5f5f'
            }else if(protV<parseFloat(this.state.objetivoProt)-10){
                colorProt = '#f1dd49'
            }else{
                colorProt = '#79bd46'
            }
            if(grasV>parseFloat(this.state.objetivoGras)+10){
                colorGras = '#ff5f5f'
            }else if(grasV<parseFloat(this.state.objetivoGras)-10){
                colorGras = '#f1dd49'
            }else{
                colorGras = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumV) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratV)
           + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protV) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasV); +'</p>'
           socket.emit('clicked5', aux);
        })

        await api.getMenuById(sabado[i]).then(res => {
            sumS = sumS +  parseInt(res.data.data.calorias)
            hidratS = hidratS +  parseFloat(res.data.data.hidratos)
            protS = protS +  parseFloat(res.data.data.proteinas)
            grasS = grasS +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
            if(sumS>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumS<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            if(hidratS>parseFloat(this.state.objetivoHidr)+10){
                colorHidr = '#ff5f5f'
            }else if(hidratS<parseFloat(this.state.objetivoHidr)-10){
                colorHidr = '#f1dd49'
            }else{
                colorHidr = '#79bd46'
            }
            if(protS>parseFloat(this.state.objetivoProt)+10){
                colorProt = '#ff5f5f'
            }else if(protS<parseFloat(this.state.objetivoProt)-10){
                colorProt = '#f1dd49'
            }else{
                colorProt = '#79bd46'
            }
            if(grasS>parseFloat(this.state.objetivoGras)+10){
                colorGras = '#ff5f5f'
            }else if(grasS<parseFloat(this.state.objetivoGras)-10){
                colorGras = '#f1dd49'
            }else{
                colorGras = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumS) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratS)
           + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protS) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasS); +'</p>'
           socket.emit('clicked6', aux);
        })

        await api.getMenuById(domingo[i]).then(res => {
            sumD = sumD +  parseInt(res.data.data.calorias)
            hidratD = hidratD +  parseFloat(res.data.data.hidratos)
            protD = protD +  parseFloat(res.data.data.proteinas)
            grasD = grasD +  parseFloat(res.data.data.grasas)
            var colorCal, colorHidr, colorProt,colorGras
            if(sumD>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumD<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            if(hidratD>parseFloat(this.state.objetivoHidr)+10){
                colorHidr = '#ff5f5f'
            }else if(hidratD<parseFloat(this.state.objetivoHidr)-10){
                colorHidr = '#f1dd49'
            }else{
                colorHidr = '#79bd46'
            }
            if(protD>parseFloat(this.state.objetivoProt)+10){
                colorProt = '#ff5f5f'
            }else if(protD<parseFloat(this.state.objetivoProt)-10){
                colorProt = '#f1dd49'
            }else{
                colorProt = '#79bd46'
            }
            if(grasD>parseFloat(this.state.objetivoGras)+10){
                colorGras = '#ff5f5f'
            }else if(grasD<parseFloat(this.state.objetivoGras)-10){
                colorGras = '#f1dd49'
            }else{
                colorGras = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumD) + '</p>, Hidratos: <p style="display: initial;color:' +colorHidr+ ';">' + (parseFloat(this.state.objetivoHidr) - hidratD)
           + '</p>, Proteinas: <p style="display: initial;color:'+colorProt+ ';">' + (parseFloat(this.state.objetivoProt) - protD) + '</p>, Grasas: <p style="display: initial;color:' +colorGras+ ';">'+ (parseFloat(this.state.objetivoGras) - grasD); +'</p>'
           socket.emit('clicked7', aux);
        })
        }

       

            
    
   // document.getElementById("creationsuccess").innerHTML = sumL;
    }



    handleIncludeRegistron = async () => {
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

            const {userData, userId} = this.props

        await api.insertRegistron(payload).then(res => {
            
           this.setState({
            dateTime:'', 
            estadoAnimo:'', 
            professional:userData.user.id,
            pacient:userId,
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
         
           })

           
           window.alert(`Registro añadido correctamente`)
           window.location.reload()

        }).catch(error => {
            console.log(error.response)
        });
    }

    componentWillMount = async () => {
        const promise = api.getAllMenus();

        promise.then(menus =>{
            const selectmenus = [];

            menus.data.data.map((menu) => { selectmenus.push( 
                <option value={menu._id}>{menu.name}</option>
            )});
            this.setState(
                {
                    menus: selectmenus
                }, () => console.log(this.state.menus)
            )
        })
    }
    
    componentDidMount = async () => {

        const l = console.log
        const ENDPOINT = 'localhost:5000';
        const socket = io(ENDPOINT);
        function getEl(id) {
            return document.getElementById(id)
        }
        const editor = getEl(this.props.idEdit)
        editor.addEventListener("change", (evt) => {
        const text = editor.value
        this.setState({ dateTime: text })
    
        socket.emit('write', text);
    })



    
    
    socket.on('write', data => {
      editor.value = data;
    });

    const editor2 = getEl(this.props.idEdit2)
    editor2.addEventListener("change", (evt) => {
    const text = editor2.value
    this.setState({ estadoAnimo: text })

    socket.emit('write2', text);
})


    socket.on('write2', data => {
    editor2.value = data;
}); 
/*
const editor3 = getEl(this.props.idEdit3)
    editor3.addEventListener("keyup", (evt) => {
    const text = editor3.value
    this.setState({ pacient: text })

    socket.emit('write3', text);
})


    socket.on('write3', data => {
    editor3.value = data;
}); 

const editor4 = getEl(this.props.idEdit4)
    editor4.addEventListener("keyup", (evt) => {
    const text = editor4.value
    this.setState({ professional: text })
   

    socket.emit('write4', text);
})


    socket.on('write4', data => {
    editor4.value = data;
}); 
*/

const editor5 = getEl(this.props.idEdit5)
editor5.addEventListener("change", (evt) => {
const text = editor5.value
this.setState({ desayunoL: text })


socket.emit('write5', text);
})


socket.on('write5', data => {
editor5.value = data;
}); 



const editor6 = getEl(this.props.idEdit6)
    editor6.addEventListener("change", (evt) => {
    const text = editor6.value
    this.setState({ mediaL: text })

    socket.emit('write6', text);
})


    socket.on('write6', data => {
    editor6.value = data;
}); 


const editor7 = getEl(this.props.idEdit7)
    editor7.addEventListener("change", (evt) => {
    const text = editor7.value
    this.setState({ almuerzoL: text })

    socket.emit('write7', text);
})


    socket.on('write7', data => {
    editor7.value = data;
}); 

const editor8 = getEl(this.props.idEdit8)
    editor8.addEventListener("change", (evt) => {
    const text = editor8.value
    this.setState({ meriendaL: text })

    socket.emit('write8', text);
})


    socket.on('write8', data => {
    editor8.value = data;
}); 

const editor9 = getEl(this.props.idEdit9)
    editor9.addEventListener("change", (evt) => {
    const text = editor9.value
    this.setState({ cenaL: text })
   

    socket.emit('write9', text);
})


    socket.on('write9', data => {
    editor9.value = data;
}); 

const editor10 = getEl(this.props.idEdit10)
    editor10.addEventListener("change", (evt) => {
    const text = editor10.value
    this.setState({ desayunoM: text })

    socket.emit('write10', text);
})


    socket.on('write10', data => {
    editor10.value = data;
}); 

const editor11 = getEl(this.props.idEdit11)
    editor11.addEventListener("change", (evt) => {
    const text = editor11.value
    this.setState({ mediaM: text })

    socket.emit('write11', text);
})


    socket.on('write11', data => {
    editor11.value = data;
}); 

const editor12 = getEl(this.props.idEdit12)
    editor12.addEventListener("change", (evt) => {
    const text = editor12.value
    this.setState({ almuerzoM: text })

    socket.emit('write12', text);
})


    socket.on('write12', data => {
    editor12.value = data;
}); 

const editor13 = getEl(this.props.idEdit13)
    editor13.addEventListener("change", (evt) => {
    const text = editor13.value
    this.setState({ meriendaM: text })

    socket.emit('write13', text);
})


    socket.on('write13', data => {
    editor13.value = data;
}); 

const editor14 = getEl(this.props.idEdit14)
    editor14.addEventListener("change", (evt) => {
    const text = editor14.value
    this.setState({ cenaM: text })

    socket.emit('write14', text);
})


    socket.on('write14', data => {
    editor14.value = data;
}); 

const editor15 = getEl(this.props.idEdit15)
    editor15.addEventListener("change", (evt) => {
    const text = editor15.value
    this.setState({ desayunoX: text })

    socket.emit('write15', text);
})


    socket.on('write15', data => {
    editor15.value = data;
}); 

const editor16 = getEl(this.props.idEdit16)
    editor16.addEventListener("change", (evt) => {
    const text = editor16.value
    this.setState({ mediaX: text })

    socket.emit('write16', text);
})


    socket.on('write16', data => {
    editor16.value = data;
}); 

const editor17 = getEl(this.props.idEdit17)
    editor17.addEventListener("change", (evt) => {
    const text = editor17.value
    this.setState({ almuerzoX: text })

    socket.emit('write17', text);
})


    socket.on('write17', data => {
    editor17.value = data;
}); 

const editor18 = getEl(this.props.idEdit18)
    editor18.addEventListener("change", (evt) => {
    const text = editor18.value
    this.setState({ meriendaX: text })

    socket.emit('write18', text);
})


    socket.on('write18', data => {
    editor18.value = data;
}); 

const editor19 = getEl(this.props.idEdit19)
    editor19.addEventListener("change", (evt) => {
    const text = editor19.value
    this.setState({ cenaX: text })

    socket.emit('write19', text);
})


    socket.on('write19', data => {
    editor19.value = data;
}); 

const editor20 = getEl(this.props.idEdit20)
    editor20.addEventListener("change", (evt) => {
    const text = editor20.value
    this.setState({ desayunoJ: text })

    socket.emit('write20', text);
})


    socket.on('write20', data => {
    editor20.value = data;
}); 

const editor21 = getEl(this.props.idEdit21)
    editor21.addEventListener("change", (evt) => {
    const text = editor21.value
    this.setState({ mediaJ: text })

    socket.emit('write21', text);
})


    socket.on('write21', data => {
    editor21.value = data;
}); 

const editor22 = getEl(this.props.idEdit22)
    editor22.addEventListener("change", (evt) => {
    const text = editor22.value
    this.setState({ almuerzoJ: text })

    socket.emit('write22', text);
})


    socket.on('write22', data => {
    editor22.value = data;
}); 

const editor23 = getEl(this.props.idEdit23)
    editor23.addEventListener("change", (evt) => {
    const text = editor23.value
    this.setState({ meriendaJ: text })

    socket.emit('write23', text);
})


    socket.on('write23', data => {
    editor23.value = data;
}); 

const editor24 = getEl(this.props.idEdit24)
    editor24.addEventListener("change", (evt) => {
    const text = editor24.value
    this.setState({ cenaJ: text })

    socket.emit('write24', text);
})


    socket.on('write24', data => {
    editor24.value = data;
}); 

const editor25 = getEl(this.props.idEdit25)
    editor25.addEventListener("change", (evt) => {
    const text = editor25.value
    this.setState({ desayunoV: text })

    socket.emit('write25', text);
})


    socket.on('write25', data => {
    editor25.value = data;
}); 

const editor26 = getEl(this.props.idEdit26)
    editor26.addEventListener("change", (evt) => {
    const text = editor26.value
    this.setState({ mediaV: text })

    socket.emit('write26', text);
})


    socket.on('write26', data => {
    editor26.value = data;
}); 

const editor27 = getEl(this.props.idEdit27)
    editor27.addEventListener("change", (evt) => {
    const text = editor27.value
    this.setState({ almuerzoV: text })

    socket.emit('write27', text);
})


    socket.on('write27', data => {
    editor27.value = data;
}); 

const editor28 = getEl(this.props.idEdit28)
    editor28.addEventListener("change", (evt) => {
    const text = editor28.value
    this.setState({ meriendaV: text })

    socket.emit('write28', text);
})


    socket.on('write28', data => {
    editor28.value = data;
}); 

const editor29 = getEl(this.props.idEdit29)
    editor29.addEventListener("change", (evt) => {
    const text = editor29.value
    this.setState({ cenaV: text })

    socket.emit('write29', text);
})


    socket.on('write29', data => {
    editor29.value = data;
}); 

const editor30 = getEl(this.props.idEdit30)
    editor30.addEventListener("change", (evt) => {
    const text = editor30.value
    this.setState({ desayunoS: text })

    socket.emit('write30', text);
})


    socket.on('write30', data => {
    editor30.value = data;


   
}); 

const editor31 = getEl(this.props.idEdit31)
    editor31.addEventListener("change", (evt) => {
    const text = editor31.value
    this.setState({ mediaS: text })

    socket.emit('write31', text);
})


    socket.on('write31', data => {
    editor31.value = data;
}); 

const editor32 = getEl(this.props.idEdit32)
    editor32.addEventListener("change", (evt) => {
    const text = editor32.value
    this.setState({ almuerzoS: text })

    socket.emit('write32', text);
})


    socket.on('write32', data => {
    editor32.value = data;
}); 

const editor33 = getEl(this.props.idEdit33)
    editor33.addEventListener("change", (evt) => {
    const text = editor33.value
    this.setState({ meriendaS: text })

    socket.emit('write33', text);
})


    socket.on('write33', data => {
    editor33.value = data;
}); 

const editor34 = getEl(this.props.idEdit34)
    editor34.addEventListener("change", (evt) => {
    const text = editor34.value
    this.setState({ cenaS: text })

    socket.emit('write34', text);
})


    socket.on('write34', data => {
    editor34.value = data;
}); 

const editor35 = getEl(this.props.idEdit35)
    editor35.addEventListener("change", (evt) => {
    const text = editor35.value
    this.setState({ desayunoD: text })

    socket.emit('write35', text);
})


    socket.on('write35', data => {
    editor35.value = data;
}); 

const editor36 = getEl(this.props.idEdit36)
    editor36.addEventListener("change", (evt) => {
    const text = editor36.value
    this.setState({ mediaD: text })

    socket.emit('write36', text);
})


    socket.on('write36', data => {
    editor36.value = data;
}); 

const editor37 = getEl(this.props.idEdit37)
    editor37.addEventListener("change", (evt) => {
    const text = editor37.value
    this.setState({ almuerzoD: text })

    socket.emit('write37', text);
})


    socket.on('write37', data => {
    editor37.value = data;
}); 

const editor38 = getEl(this.props.idEdit38)
    editor38.addEventListener("change", (evt) => {
    const text = editor38.value
    this.setState({ meriendaD: text })

    socket.emit('write38', text);
})


    socket.on('write38', data => {
    editor38.value = data;
}); 

const editor39 = getEl(this.props.idEdit39)
    editor39.addEventListener("change", (evt) => {
    const text = editor39.value
    this.setState({ cenaD: text })

    socket.emit('write39', text);
})


    socket.on('write39', data => {
    editor39.value = data;
}); 

const editor40 = getEl("caloriaslunes")

const editor41 = getEl("creario")
  
editor41.addEventListener("click", (evt) => {
    const text = editor40.text


    socket.emit('write40', text);
})



    socket.on('write40', data => {
    editor40.innerHTML = data;
}); 

const editorCal = getEl(this.props.idEditCal)
    editorCal.addEventListener("keyup", (evt) => {
    const text = editorCal.value
    this.setState({ objetivoCal: text })

    socket.emit('writeCal', text);
})


    socket.on('writeCal', data => {
    editorCal.value = data;
}); 

const editorHidr = getEl(this.props.idEditHidr)
    editorHidr.addEventListener("keyup", (evt) => {
    const text = editorHidr.value
    this.setState({ objetivoHidr: text })

    socket.emit('writeHidr', text);
})


    socket.on('writeHidr', data => {
    editorHidr.value = data;
}); 

const editorProt = getEl(this.props.idEditProt)
    editorProt.addEventListener("keyup", (evt) => {
    const text = editorProt.value
    this.setState({ objetivoProt: text })

    socket.emit('writeProt', text);
})


    socket.on('writeProt', data => {
    editorProt.value = data;
}); 

const editorGras = getEl(this.props.idEditGras)
    editorGras.addEventListener("keyup", (evt) => {
    const text = editorGras.value
    this.setState({ objetivoGras: text })

    socket.emit('writeGras', text);
})


    socket.on('writeGras', data => {
    editorGras.value = data;
}); 


socket.on('buttonUpdate', function(data){
    document.getElementById("caloriaslunes").innerHTML = data ;
})

socket.on('buttonUpdate2', function(data){
    document.getElementById("caloriasmartes").innerHTML = data ;
})

socket.on('buttonUpdate3', function(data){
    document.getElementById("caloriasmiercoles").innerHTML = data ;
})

socket.on('buttonUpdate4', function(data){
    document.getElementById("caloriasjueves").innerHTML = data ;
})

socket.on('buttonUpdate5', function(data){
    document.getElementById("caloriasviernes").innerHTML = data ;
})

socket.on('buttonUpdate6', function(data){
    document.getElementById("caloriassabado").innerHTML = data ;
})

socket.on('buttonUpdate7', function(data){
    document.getElementById("caloriasdomingo").innerHTML = data ;
})
    }  
    
 sacaPacientes = () =>
    api.getAllMenus()
.then(res => {return res})

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
            cenaD,
        menus  } = this.state
        const {userData, id} = this.props
        return (
            <div class="cardcita cardcitasesion">
            <Wrapper>
            <div class="cardcita-title cardcitatitlesesion">
                <h2>Crear el registro </h2>
                </div>
                <div class="pairs">
                <Label>Fecha: </Label>
                <InputText
                    type="date"
                    value={dateTime}
                    onChange={this.handleChangeInputDateTime}
                    id={this.props.idEdit}
                />
                </div>
                <div class="pairs">
                <Label>Estado de ánimo: </Label>
                <select id={this.props.idEdit2}  onChange={e => this.setState({estadoAnimo: e.target.value})} >
                    <option value="Motivado">Motivado</option>
                    <option value="Desilusionado">Desilusionado</option>
                    <option value="Cansado">Cansado</option>
                    <option value="Vigorizado">Vigorizado</option>
                    <option value="Hambriento">Hambriento</option>
                </select>
                </div>
              
                <div class="pairs">
                <Label>Objetivo calórico diario: </Label>
                <InputText
                    type="text"
                  
                    onChange={this.handleChangeObjetivoCalorico}
                    id={this.props.idEditCal}
                />
                </div>
                <div class="pairs">
                <Label>Objetivo hidratos diario: </Label>
                <InputText
                    type="text"
                  
                    onChange={this.handleChangeObjetivoHidrato}
                    id={this.props.idEditHidr}
                />
                </div>
                <div class="pairs">
                <Label>Objetivo proteico diario: </Label>
                <InputText
                    type="text"
                  
                    onChange={this.handleChangeObjetivoProteico}
                    id={this.props.idEditProt}
                />
                </div>
                <div class="pairs">
                <Label>Objetivo graso diario: </Label>
                <InputText
                    type="text"
                  
                    onChange={this.handleChangeObjetivoGraso}
                    id={this.props.idEditGras}
                />
                </div>
<div>
<div class="days daysesion">
<p class="dayl">Lunes</p>
                <Label>Desayuno: </Label>

                <select id={this.props.idEdit5}  onChange={e => this.setState({desayunoL: e.target.value})} >
                    {this.state.menus}
                </select>
 
                <Label>Media mañana: </Label>
                <select id={this.props.idEdit6}  onChange={e => this.setState({mediaL: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit7}  onChange={e => this.setState({almuerzoL: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit8}  onChange={e => this.setState({meriendaL: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit9}  onChange={e => this.setState({cenaL: e.target.value})} >
                    {this.state.menus}
                </select>
                
                </div>
                
                </div>
                <div id="caloriaslunes" class="indicadores"></div>
                <div class="days daysesion">
<p class="day">Martes</p>

                <Label>Desayuno: </Label>
                <select id={this.props.idEdit10}  onChange={e => this.setState({desayunoM: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit11}  onChange={e => this.setState({mediaM: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit12}  onChange={e => this.setState({almuerzoM: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit13}  onChange={e => this.setState({meriendaM: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit14}  onChange={e => this.setState({cenaM: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>
                <div id="caloriasmartes" ></div>
                <div class="days daysesion">
<p class="day">Miércoles</p>
                <Label>Desayuno: </Label>
                <select id={this.props.idEdit15}  onChange={e => this.setState({desayunoX: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit16}  onChange={e => this.setState({mediaX: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit17}  onChange={e => this.setState({almuerzoX: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit18}  onChange={e => this.setState({meriendaX: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit19}  onChange={e => this.setState({cenaX: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>
                <div id="caloriasmiercoles"></div>
                <div class="days daysesion">
<p class="day">Jueves</p>

                <Label>Desayuno: </Label>
                <select id={this.props.idEdit20}  onChange={e => this.setState({desayunoJ: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit21}  onChange={e => this.setState({mediaJ: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit22}  onChange={e => this.setState({almuerzoJ: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit23}  onChange={e => this.setState({meriendaJ: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit24}  onChange={e => this.setState({cenaJ: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>
                <div id="caloriasjueves"></div>
                <div class="days daysesion">
<p class="day">Viernes</p>
                <Label>Desayuno: </Label>
                <select id={this.props.idEdit25}  onChange={e => this.setState({desayunoV: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit26}  onChange={e => this.setState({mediaV: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit27}  onChange={e => this.setState({almuerzoV: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit28}  onChange={e => this.setState({meriendaV: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit29}  onChange={e => this.setState({cenaV: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>
                <div id="caloriasviernes"></div>
                <div class="days daysesion">
<p class="day">Sábado</p>
                <Label>Desayuno: </Label>
                <select id={this.props.idEdit30}  onChange={e => this.setState({desayunoS: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit31}  onChange={e => this.setState({mediaS: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit32}  onChange={e => this.setState({almuerzoS: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit33}  onChange={e => this.setState({meriendaS: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit34}  onChange={e => this.setState({cenaS: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>

                <div id="caloriassabado"></div>
                <div class="days daysesion">
<p class="day">Domingo</p>
                <Label>Desayuno: </Label>
                <select id={this.props.idEdit35}  onChange={e => this.setState({desayunoD: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Media mañana: </Label>
                <select id={this.props.idEdit36}  onChange={e => this.setState({mediaD: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Almuerzo: </Label>
                <select id={this.props.idEdit37}  onChange={e => this.setState({almuerzoD: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Merienda: </Label>
                <select id={this.props.idEdit38}  onChange={e => this.setState({meriendaD: e.target.value})} >
                    {this.state.menus}
                </select>

                <Label>Cena: </Label>
                <select id={this.props.idEdit39}  onChange={e => this.setState({cenaD: e.target.value})} >
                    {this.state.menus}
                </select>
                </div>
                <div id="caloriasdomingo"></div>
                <Button onClick={this.handleComprobarCalorias} id="creario" >Calcular</Button>
                <Button onClick={this.handleIncludeRegistron} id="creario" >Crear</Button>
     
            </Wrapper>
            </div>
        )
    }
}

export default RegistronsInsertSo
