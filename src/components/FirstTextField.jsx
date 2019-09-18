import React from 'react';
import './FirstTextField.css';
import axios from 'axios';

const API_URL = 'http://love-calculator.p.rapidapi.com';
const API_KEY = '4ca5c860b4msh5b19fe48080e408p1f6c49jsne9e041833357'

class FirstTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            value: ''
        };
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
        let path = `./SecondTextField`;
        this.props.history.push(path);
      }
      
      componentDidMount(){
          const url = `${API_URL}/fname`;
          axios.post(url, { fname:this.state.fname })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      }

   render (){
       return(
           <div>
               <h1 className='text'>Please enter the first name</h1>
             <form className='form'onSubmit={this.handleSubmit}>
             <label>
             <input type="text" value={this.state.fname} onChange={this.handleChange} />
             </label>
             <input type="submit" value="Submit" onClick={this.routeChange} />
           </form>
           </div>
       );
   }
}

export default FirstTextField;


    
  
    
      