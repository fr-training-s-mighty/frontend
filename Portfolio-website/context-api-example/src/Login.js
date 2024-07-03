import React,{useContext,useState} from "react";
import { UserContext } from "./UserContext";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username,setUsername] = useState('');
    const { login } = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username);
        history.push('/');
    };

    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Username:
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange = {(e)=> setUsername(e.target.value)}/>

                    </label>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

