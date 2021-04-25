import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import ErrorNotice from "../misc/ErrorNotice";
import api from '../api'
import Async from 'react-async';
import Select from 'react-select';
import emailjs from 'emailjs-com'



function CitasInsert () {
const [sessionName, setSessionName] = useState();
const [dateTime, setDateTime] = useState();
const [professional, setProfessional] = useState();
const [pacient, setPacient] = useState();
const [error, setError] = useState();
const {userData} = useContext(UserContext);
const history = useHistory();

const onChange = async (selectedOption) => {

    console.log(`Option selected:`, selectedOption);
    setPacient(selectedOption.val);
    
  };

const submit = async (e) => {
    e.preventDefault();
try{
    const newCita = { sessionName, dateTime, professional, pacient };
    const pacient_name = pacient.name
    const email = pacient.email
    const variables = {pacient_name, dateTime, sessionName, email}
    await api.insertCita(newCita).then(res => {
        
        emailjs.sendForm('gmail', 'template_56cxdmb', 
        null, 'user_VpVRrDLQU90yVeshAi5FH')
        .then((result) => {
              console.log(result.text);
          }, 
           (error) => {
              console.log(error.text);
           });

        window.alert(`Cita añadida correctamente`)
        window.location.reload()
        this.setState({
            sessionName: '',
            dateTime: '',
            professional: '',
            pacient: '',
        })
    
    })
   
    

    

    } catch(err) {
    
    }
    };

const sacaPacientes = () =>
    api.getAsignacionesProfessionalById(userData.user.id)
    .then(res => {return res})

  


return (
<div className="create">
    <div class="cardcita">
        <div class="cardcita-title">
<h2>Crear cita</h2>

</div>
{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
<form onSubmit={submit}>
<label class="field">Nombre de la sesión: </label>
<input class="introduction" type="text" id="sessionName" onChange={e => setSessionName(e.target.value)}/>
<label class="field">Fecha y Hora: </label>
<input class="introduction" type="datetime-local" id="dateTime" onChange={e => setDateTime(e.target.value)}/>
<input class="introduction" id="professional" ref={e => setProfessional(userData.user.id)} value={userData.user.id} hidden="true" />







<label class="field">Paciente: </label>



<Async promiseFn={sacaPacientes}>

{({ data, err}) => {
 
          if (err) return `Something went wrong: ${err.message}`

          if (data){

            const selectpacient = [];

            data.data.data.map((paciente) => { selectpacient.push({ desc:paciente.pacient.name+" "+paciente.pacient.surname, val: paciente.pacient._id  })});
            
             
            return (

                <Select options={selectpacient} getOptionLabel={(option)=>option.desc}
                getOptionValue={(option)=>option.val } id="pacient"  onChange={onChange} ></Select>
        
                
            )}
        }}
</Async>




<input type="submit" value="Crear cita" className="btn btn-primary aux" />
</form>
</div>
</div>
);
}
export default CitasInsert;