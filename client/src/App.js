import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';


import 'bootstrap/dist/css/bootstrap.min.css'
import { MoviesList, MoviesInsert, MoviesUpdate } from './pages';
import { CitasList, CitasInsert, CitasUpdate, CitasHome } from './components/cita';
import  {useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserContext from './context/userContext';
import './App.css';
import NoPermision from './components/errors/NoPermision';



const user = null;

function App() {

   
    const [ userData, setUserData] = useState({
            token: undefined,
            user: undefined
        });
        useEffect(() => {
            const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if(token === null){
            localStorage.setItem("auth-token", "");
            token = "";
        }
        const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
            if (tokenResponse.data) {
                const userRes = await axios.get("http://localhost:5000/users/", {
                headers: { "x-auth-token": token },
        });
        setUserData({
            token,
            user: userRes.data,
        });
        }
        }
        checkLoggedIn();
        }, []);

            if(userData.user){
                return (
                    <BrowserRouter>
                    <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/chat/join" exact component={Join} />
                        <Route path="/chat" component={Chat} />
                        <Route path="/citas" exact component={CitasHome} />
                        <Route path="/citas/list" exact component={CitasList} />
                        <Route path="/citas/create" exact component={CitasInsert} />
                        <Route path="/citas/update/:id" exact component={CitasUpdate} />
                        <Route path="/register" component={NoPermision} />
                        <Route path="/login" component={NoPermision} />
                    </Switch>
                    </UserContext.Provider>
                    </BrowserRouter>
                );
            }else{
                return (
                    <BrowserRouter>
                    <UserContext.Provider value={{ userData, setUserData }}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/chat/join" exact component={NoPermision} />
                        <Route path="/chat" component={NoPermision} />
                        <Route path="/movies/list" exact component={NoPermision} />
                        <Route path="/movies/create" exact component={NoPermision} />
                        <Route path="/movies/update/:id" exact component={NoPermision} />
                        <Route path="/citas/list" exact component={NoPermision} />
                        <Route path="/citas/create" exact component={NoPermision} />
                        <Route path="/citas/update/:id" exact component={NoPermision} />
                        <Route path="/citas" exact component={NoPermision} />

                    </Switch>
                    </UserContext.Provider>
                    </BrowserRouter>
                );
            }
           
}


export default App;