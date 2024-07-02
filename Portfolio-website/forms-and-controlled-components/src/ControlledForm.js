import React from 'react';

class ControlledForm extends React.Component{
    constructor ( props ){
        super( props );
        this.state = {
            name:'',
            email:'',
            age:'',
            phone:'',
            errors: {}
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
        // alert('Form Submitted '+JSON.stringify(this.state));
        event.preventDefault();
        if(this.validateForm()){
            alert('Form Submitted '+JSON.stringify(this.state));
        }
    }
    validateForm(){
        const {name,email,age,phone} = this.state;
        const errors = {};
        let isValid = true;

        if (! name ){
            isValid = false;
            errors.name = 'Name is required ';
        }

        this.setState({errors});
        return isValid;


    }

    render(){
        const {name,email,age,phone,errors} = this.state;
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
                        {errors.name && <div className='text-danger'>{errors.name}</div>}
                    </div>
                    <div className='form-group'>
                        <label>
                            Email:
                            <input type='email' name='email' className='form-control'  value={this.state.email} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Age:
                            <input type='age' name='age' className='form-control'  value={this.state.age} onChange={this.handleChange}/>
                        </label>
                    </div>

                    <div className='form-group'>
                        <label>
                            Phone:
                            <input type='phone' name='phone' className='form-control'  value={this.state.phone} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <button className='btn btn-primary' name="submit">Login </button>
                </form>

            </div>
        )
    };



}

export default ControlledForm;