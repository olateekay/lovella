import React from 'react';
import './FirstTextField.css';
import axios from 'axios';

const API_URL = 'http://love-calculator.p.rapidapi.com';
const API_KEY = '4ca5c860b4msh5b19fe48080e408p1f6c49jsne9e041833357'

class SecondTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: props.location.state.fname,
            sname: ''
        };
        this.routeChange =  this.routeChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({sname: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      routeChange() {
        const { fname, sname } = this.state;
        let path = `./LandingPage`;
        this.props.history.push(path, { fname, sname });
      }

     componentDidMount(){
        const url = `${API_URL, API_KEY}/sname`;
        axios.post(url, { sname:this.state.sname })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    }

   render (){
       return(
           <div>
             <h1 className='text'>Please enter the Second name</h1>
             <form className='form'onSubmit={this.handleSubmit}>
             <label>
             <input type="text" id='sname' value={this.state.sname} onChange={this.handleChange} />
             </label>
             <input type="submit" value="Submit" onClick={this.routeChange} />
           </form>
           </div>
       );
   }
}

export default SecondTextField;
