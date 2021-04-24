import React, { useState, Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import io from 'socket.io-client';
import Async from 'react-async';
import Select from 'react-select';
import ErrorNotice from "../misc/ErrorNotice";


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

class RegistroesInsertSoNormal extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            dateTime:'', 
            dificultad:'', 
            professional:this.props.userData.user.id,
            pacient:this.props.userId,
            lunes:'',
            martes:'',
            miercoles:'',
            jueves:'',
            viernes:'',
            sabado:'',
            domingo:'',
            entrenos:[],
            objetivoCal: '',
            error: '',
           
        }
    }

    handleChangeInputDateTime = async event => {
        const dateTime = event.target.value
        this.setState({ dateTime })
    }

    handleChangeInputDificultad = async event => {
        const dificultad = event.target.value
        this.setState({ dificultad })
    }

  /* handleChangeInputProfessional = async () => {

        this.setState({ professional:  })
    }

    handleChangeInputPacient = async () => {
      
        this.setState({ pacient:  })
    }
*/
    handleChangeInputLunes = async (selectedOption) => {
        this.setState({ desayunoL:  selectedOption})
        
    }

    handleChangeInputMartes = async event => {
        const martes = event.target.value
        this.setState({ martes })
    }

    handleChangeInputMiercoles = async event => {
        const miercoles = event.target.value
        this.setState({ miercoles })
    }

    handleChangeInputJueves = async event => {
        const jueves = event.target.value
        this.setState({ jueves })
    }

    handleChangeInputViernes = async event => {
        const viernes = event.target.value
        this.setState({ viernes })
    }

    handleChangeInputSabado = async event => {
        const sabado = event.target.value
        this.setState({ sabado })
    }

    handleChangeInputDomingo = async event => {
        const domingo = event.target.value
        this.setState({ domingo })
    }

    handleChangeObjetivoCalorico = async event => {
        const objetivoCal = event.target.value
        this.setState({ objetivoCal })
    }



   
    handleComprobarCalorias = async () => {
        const ENDPOINT = 'localhost:5000';
        const socket = io(ENDPOINT);
        const lunes = this.state.lunes;
        const martes = this.state.martes;
        const miercoles = this.state.miercoles;
        const jueves = this.state.jueves;
        const viernes = this.state.viernes;
        const sabado = this.state.sabado;
        const domingo = this.state.domingo;

        var sumL  = 0
        var sumM = 0
        var sumX= 0
        var sumJ= 0
        var sumV= 0
        var sumS= 0
        var sumD= 0

        for(var i=0; i<7; i++){
            await api.getEntrenoById(lunes).then(res => {
                sumL = sumL +  parseInt(res.data.data.calorias)
                var colorCal
                if(sumL>parseInt(this.state.objetivoCal)+100){
                    colorCal = '#ff5f5f'
                }else if(sumL<parseInt(this.state.objetivoCal)-100){
                    colorCal = '#f1dd49'
                }else{
                    colorCal = '#79bd46'
                }
               var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumL) 
               socket.emit('clicked01', aux);
        })

        await api.getEntrenoById(martes).then(res => {
            sumM = sumM +  parseInt(res.data.data.calorias)
            var colorCal
            if(sumM>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumM<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumM)
           socket.emit('clicked02', aux);
        })

        await api.getEntrenoById(miercoles).then(res => {
            sumX = sumX +  parseInt(res.data.data.calorias)
            var colorCal
                if(sumX>parseInt(this.state.objetivoCal)+100){
                    colorCal = '#ff5f5f'
                }else if(sumX<parseInt(this.state.objetivoCal)-100){
                    colorCal = '#f1dd49'
                }else{
                    colorCal = '#79bd46'
                }
               var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumX) 
               socket.emit('clicked03', aux);
        })

        await api.getEntrenoById(jueves).then(res => {
            sumJ = sumJ +  parseInt(res.data.data.calorias)
            var colorCal
            if(sumJ>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumJ<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
           
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumJ) 
           socket.emit('clicked04', aux);
        })

        await api.getEntrenoById(viernes).then(res => {
            sumV = sumV +  parseInt(res.data.data.calorias)
            var colorCal
            if(sumV>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumV<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumV) 
           socket.emit('clicked05', aux);
        })

        await api.getEntrenoById(sabado).then(res => {
            sumS = sumS +  parseInt(res.data.data.calorias)
            var colorCal
            if(sumS>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumS<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
            
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumS) 
           socket.emit('clicked06', aux);
        })

        await api.getEntrenoById(domingo).then(res => {
            sumD = sumD +  parseInt(res.data.data.calorias)
        
            var colorCal
            if(sumD>parseInt(this.state.objetivoCal)+100){
                colorCal = '#ff5f5f'
            }else if(sumD<parseInt(this.state.objetivoCal)-100){
                colorCal = '#f1dd49'
            }else{
                colorCal = '#79bd46'
            }
           
           var aux =  'Calorías: <p style="display: initial;color:' +colorCal+ ';">' + (parseInt(this.state.objetivoCal) - sumD) 
           socket.emit('clicked07', aux);
        })
        }

       

            
    
   // document.getElementById("creationsuccess").innerHTML = sumL;
    }



    handleIncludeRegistroe = async () => {
        
        const { dateTime, 
            dificultad, 
            professional,
            pacient,
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo,
             } = this.state
        const payload = { dateTime, 
            dificultad, 
            professional,
            pacient,
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo,
             }

            const {userData, userId} = this.props
        try{
        await api.insertRegistroe(payload).then(res => {
            
           this.setState({
            dateTime:'', 
            estadoAnimo:'', 
            professional:userData.user.id,
            pacient:userId,
            lunes:'',
            martes:'',
            miercoles:'',
            jueves:'',
            viernes:'',
            sabado:'',
            domingo:'',
            
         
           })

           
           window.alert(`Registro añadido correctamente`)
           window.location.reload()

        })
    } catch(err) {
        err.response.data.msg && this.setState({error : err.response.data.msg })
    }
    }

    componentWillMount = async () => {
        const promise = api.getAllEntrenos();

        promise.then(entrenos =>{
            const selectentrenos = [];

            entrenos.data.data.map((entreno) => { selectentrenos.push( 
                <option value={entreno._id}>{entreno.name}</option>
            )});
            this.setState(
                {
                    entrenos: selectentrenos
                }, () => console.log(this.state.entrenos)
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
        const editor = getEl(this.props.idEdit01)
        editor.addEventListener("change", (evt) => {
        const text = editor.value
        this.setState({ dateTime: text })
    
        socket.emit('write01', text);
    })



    
    
    socket.on('write01', data => {
      editor.value = data;
    });

    const editor2 = getEl(this.props.idEdit02)
    editor2.addEventListener("change", (evt) => {
    const text = editor2.value
    this.setState({ dificultad: text })

    socket.emit('write02', text);
})


    socket.on('write02', data => {
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

const editor5 = getEl(this.props.idEdit05)
editor5.addEventListener("change", (evt) => {
const text = editor5.value
this.setState({ lunes: text })


socket.emit('write05', text);
})


socket.on('write05', data => {
editor5.value = data;
}); 



const editor6 = getEl(this.props.idEdit06)
    editor6.addEventListener("change", (evt) => {
    const text = editor6.value
    this.setState({ martes: text })

    socket.emit('write06', text);
})


    socket.on('write06', data => {
    editor6.value = data;
}); 


const editor7 = getEl(this.props.idEdit07)
    editor7.addEventListener("change", (evt) => {
    const text = editor7.value
    this.setState({ miercoles: text })

    socket.emit('write07', text);
})


    socket.on('write07', data => {
    editor7.value = data;
}); 

const editor8 = getEl(this.props.idEdit08)
    editor8.addEventListener("change", (evt) => {
    const text = editor8.value
    this.setState({ jueves: text })

    socket.emit('write08', text);
})


    socket.on('write08', data => {
    editor8.value = data;
}); 

const editor9 = getEl(this.props.idEdit09)
    editor9.addEventListener("change", (evt) => {
    const text = editor9.value
    this.setState({ viernes: text })
   

    socket.emit('write09', text);
})


    socket.on('write09', data => {
    editor9.value = data;
}); 

const editor10 = getEl(this.props.idEdit010)
    editor10.addEventListener("change", (evt) => {
    const text = editor10.value
    this.setState({ sabado: text })

    socket.emit('write010', text);
})


    socket.on('write010', data => {
    editor10.value = data;
}); 

const editor11 = getEl(this.props.idEdit011)
    editor11.addEventListener("change", (evt) => {
    const text = editor11.value
    this.setState({ domingo: text })

    socket.emit('write011', text);
})


    socket.on('write011', data => {
    editor11.value = data;
}); 





const editorCal = getEl(this.props.idEditCal0)
    editorCal.addEventListener("keyup", (evt) => {
    const text = editorCal.value
    this.setState({ objetivoCal: text })

    socket.emit('writeCal0', text);
})


    socket.on('writeCal0', data => {
    editorCal.value = data;
}); 




socket.on('buttonUpdate01', function(data){
    document.getElementById("caloriaslunes0").innerHTML = data ;
})

socket.on('buttonUpdate02', function(data){
    document.getElementById("caloriasmartes0").innerHTML = data ;
})

socket.on('buttonUpdate03', function(data){
    document.getElementById("caloriasmiercoles0").innerHTML = data ;
})

socket.on('buttonUpdate04', function(data){
    document.getElementById("caloriasjueves0").innerHTML = data ;
})

socket.on('buttonUpdate05', function(data){
    document.getElementById("caloriasviernes0").innerHTML = data ;
})

socket.on('buttonUpdate06', function(data){
    document.getElementById("caloriassabado0").innerHTML = data ;
})

socket.on('buttonUpdate07', function(data){
    document.getElementById("caloriasdomingo0").innerHTML = data ;
})
    }  
    
 sacaEntrenos = () =>
    api.getAllEntrenos()
.then(res => {return res})

    render() {
        const { dateTime, 
            dificultad, 
            professional,
            pacient,
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo,
        entrenos, error  } = this.state
        const {userData, id} = this.props
        return (
            <div class="cardcita cardcitasesion">
            <Wrapper>
            <div class="cardcita-title cardcitatitlesesion">
                <h2>Crear el registro </h2>
                </div>
                {error && <ErrorNotice message={error} clearError={() => this.setState({error:undefined})} />}
                <div class="pairs">
                <Label>Fecha: </Label>
                <InputText
                    type="date"
                    value={dateTime}
                    onChange={this.handleChangeInputDateTime}
                    id={this.props.idEdit01}
                />
                </div>
                <div class="pairs">
                <Label>Dificultad: </Label>
                <select class="select-css" id={this.props.idEdit02}  onChange={e => this.setState({dificultad: e.target.value})} >
                <option id="" value="">---Selecciona uno---</option>
                    <option value="Facil">Fácil</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Dificil">Difícil</option>
                </select>
                </div>
              
                <div class="pairs">
                <Label>Objetivo calórico diario: </Label>
                <InputText
                    type="text"
                  
                    onChange={this.handleChangeObjetivoCalorico}
                    id={this.props.idEditCal0}
                />
                </div>
                
<div>
<div class="days daysesion">
<p class="dayl">Lunes</p>
                <Label>Entreno: </Label>

                <select id={this.props.idEdit05}  onChange={e => this.setState({lunes: e.target.value})} >
                    {this.state.entrenos}
                </select>
 
                
                </div>
                
                </div>
                <div id="caloriaslunes0" class="indicadores"></div>
                <div class="days daysesion">
<p class="day">Martes</p>

                <Label>Entreno: </Label>
                <select id={this.props.idEdit06}  onChange={e => this.setState({martes: e.target.value})} >
                    {this.state.entrenos}
                </select>

                </div>
                <div id="caloriasmartes0" ></div>
                <div class="days daysesion">
<p class="day">Miércoles</p>
                <Label>Entreno: </Label>
                <select id={this.props.idEdit07}  onChange={e => this.setState({miercoles: e.target.value})} >
                    {this.state.entrenos}
                </select>


                </div>
                <div id="caloriasmiercoles0"></div>
                <div class="days daysesion">
<p class="day">Jueves</p>

                <Label>Entreno: </Label>
                <select id={this.props.idEdit08}  onChange={e => this.setState({jueves: e.target.value})} >
                    {this.state.entrenos}
                </select>

          
                </div>
                <div id="caloriasjueves0"></div>
                <div class="days daysesion">
<p class="day">Viernes</p>
                <Label>Entreno: </Label>
                <select id={this.props.idEdit09}  onChange={e => this.setState({viernes: e.target.value})} >
                    {this.state.entrenos}
                </select>

          
                </div>
                <div id="caloriasviernes0"></div>
                <div class="days daysesion">
<p class="day">Sábado</p>
                <Label>Entreno: </Label>
                <select id={this.props.idEdit010}  onChange={e => this.setState({sabado: e.target.value})} >
                    {this.state.entrenos}
                </select>

     
                </div>

                <div id="caloriassabado0"></div>
                <div class="days daysesion">
<p class="day">Domingo</p>
                <Label>Entreno: </Label>
                <select id={this.props.idEdit011}  onChange={e => this.setState({domingo: e.target.value})} >
                    {this.state.entrenos}
                </select>

              
                </div>
                <div id="caloriasdomingo0"></div>
                <Button onClick={this.handleComprobarCalorias} id="creario" >Calcular</Button>
                <Button onClick={this.handleIncludeRegistroe} id="creario" >Crear</Button>
     
            </Wrapper>
            </div>
        )
    }
}

export default RegistroesInsertSoNormal
