import React from "react";

class UncontrolledForm extends React.Component{
    constructor( props ){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleSubmit( event ){
    alert("Form submitted: Name "+this.nameInput.current.value +" Email "+this.emailInput.current.value);
    event.preventDefault();
   } 

   render(){
    return(
        <div className="container mt-4">
            <h2>Uncontrolled Form</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Name
                        <input type="text" name="name" className="form-control" ref={this.nameInput}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email
                        <input type="email" name="email" className="form-control" ref={this.emailInput}/>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit </button>
            </form>

        </div>
    );

   }



}

export default UncontrolledForm;