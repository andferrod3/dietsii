import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

import './Join.css';

const JoinP = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const {userData} = useContext(UserContext);

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Sesión</h1>
                <div><input placeholder="Nombre" className="joinInput" type="text" ref={e => setName(userData.user.name)} value={userData.user.name} hidden="true" /></div>
                <div><input placeholder="Nombre sesión" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                   <button className="button mt-20" type="submit">Entrar</button> 
                </Link>
            </div>
        </div>
    )
}

export default JoinP;