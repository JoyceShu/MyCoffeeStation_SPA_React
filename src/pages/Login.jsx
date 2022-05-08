
import "../css/login.css";
import { fetchLogin } from "../services";
import React, {useState} from "react";

const Login = ({ user, onLogin }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const performLogin = () => {
        if (!username || !password) {
            setError("Please fill the following field!");
            return;
        }
        setError('');
        setIsLoading(true);

        fetchLogin(username, password)
            .then(() => onLogin(username, password))
            .catch((err) => {
                setError("invalid username!");
                setIsLoading(false);
            
            });
    };

    return (
        <div className="login">
            <p className="error">{error}</p>
            {isLoading ? <span className="loader"></span> :
                <div className="login-panel">
                    <h3>Welcome to Wagon Cafe</h3>
                    <form className="username">
                        <label>Username </label>
                        <input  onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? performLogin(e) : null} placeholder="Enter your username" required />
                        <label>Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" className="password"  placeholder="Enter your password" required />
                        <button onClick={performLogin} >Login</button>
                    </form>
                </div>}
        </div>
    );
};

export default Login;