import React from "react";

class UncontrolledForm extends React.Component{
    constructor( props ){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


}