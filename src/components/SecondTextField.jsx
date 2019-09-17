import React from 'react';
import './FirstTextField.css';

class SecondTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.routeChange =  this.routeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      routeChange() {
        let path = `./LandingPage`;
        this.props.history.push(path);
      }

   render (){
       return(
           <div>
               <h1 className='text'>Please enter the Second name</h1>
             <form className='form'onSubmit={this.handleSubmit}>
             <label>
             <input type="text" value={this.state.value} onChange={this.handleChange} />
             </label>
             <input type="submit" value="Submit" onClick={this.routeChange} />
           </form>
           </div>
       );
   }
}

export default SecondTextField;
