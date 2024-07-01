import React from "react";
import './EventHandling.css';
class EventHandling extends React.Component{
   constructor( props ){
    super(props)
    this.state = {
        message : ''
    };
    // we want to bind the event handler method to the current object
    this.handle_click = this.handle_click.bind(this);
    this.handleclick = this.handleclick.bind(this);
   } 
   handle_click(){
    console.log("Handle click");
    this.setState({
         message: 'Remember to drink at least  8 glasses of water a day'
    });
   }
handleclick(message){
    // this.setState({
    //     message: message
        
    // });
    this.setState({message});
}

   render (){
    return (
        <div className="container mt-4"> 
            <h2>Daily Health Tips</h2>
            <button className="btn green-btn button-spacing" onClick={this.handle_click}> Water Tips</button>

            <button className="btn green-btn" onClick={() => this.handleclick('This is all we know')}> Get Health Tips</button>
            <p>{this.state.message}</p>
        </div>
    );
   }
}

export default EventHandling;

