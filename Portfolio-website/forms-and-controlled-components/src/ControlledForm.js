import React from 'react';

class ControlledForm extends React.Component{
    constructor ( props ){
        super( props );
        this.state = {
            name:'',
            email:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange( event ){
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }
    handleSubmit( event ){
        alert('Form Submitted '+JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            // <h1>Controlled form example</h1>
            <div className='container mt-4'>
                
                <h1>Controlled form example</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Name:
                            <input type='text' name='name' className='form-control'  value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Email:
                            <input type='email' name='email' className='form-control'  value={this.state.email} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <button className='btn btn-primary' name="submit">Login </button>
                </form>

            </div>
        )
    };



}

export default ControlledForm;