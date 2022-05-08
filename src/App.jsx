
import './App.css';
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import React from 'react';
import {useState} from 'react';


function App() {
    const [userState, setUserState] = useState({ isLoggedIn: false, username: "", password: ""});

    const login = (username, password) =>{
        setUserState({
            isLoggedIn:true,
            username:username,
            password:password,
        
        });
    };

    return (
        <div className='App'> {userState.isLoggedIn ?
            <Homepage user={userState}/>:
            <Login user={userState} onLogin={login} />
             }
        </div>

    )
}

export default App;
