import React from "react";
import Reeact from "react";

class ConditionalRendering extends React.Component{
    constructor ( props ){
        super( props );
        this.state={
            isLoggedIn: false,
            email: '',
            pswd:''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(){
        this.setState({ isLoggedIn: true });
        console.log(this.state.email);
        console.log(this.state.pswd);
    }
    handleLogout(){
        this.setState({isLoggedIn: false});
    }

    render() {
        return (

        <div className="container mt-4">
            <h2>Conditional Rendering </h2>
            {this.state.isLoggedIn ? (
            <div>
                <p>Welcome back, valued user</p>
                
                <button className="btn btn-danger" onClick={this.handleLogout}> Logout </button>
            </div>
            ): (
                <div>
                    <form>
                    <label>
                        Email
                        <input type="email" value={this.email} onChange={e => setState({email:e.target.value})}/>
                    </label>
                    <label>
                        Password
                        <input type="password" value={this.pswd} onChange={e => setState({pswd:e.target.value})}/>
                    </label>
                    </form>
                    <p>Login</p>
                    <button className="btn btn-primary" onClick={()=> this.handleLogin()}>Sign</button>
                </div>
            )}

        </div>
        );
    }
}

export default ConditionalRendering;