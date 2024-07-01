import React from "react";
import Reeact from "react";

class ConditionalRendering extends React.Component{
    constructor ( props ){
        super( props );
        this.state={
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(){
        this.setState({ isLoggedIn: true });
    }
    handleLogout(){
        this.setState({isLoggedIn: false});
    }

    render() {
        return (

        <div className="container mt-4">
            <h2>Conditional Rendering </h2>

            <div>
                <p>Welcome back, valued user</p>
                <button className="btn btn-danger"> Logout </button>
            </div>
        </div>
        );
    }
}

export default ConditionalRendering;