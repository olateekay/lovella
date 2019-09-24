import React from 'react';
import './FirstTextField.css';

class ResultsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            result: props.location.state.result
        };
        console.log(this.props)
    }

   render (){
       const { result } = this.state;
       return(
           <div className='text'>
              <h1>Results</h1> 
              <h3>First Name:{result.fname}</h3>
              <h3>Second Name:{result.sname}</h3>
              <h3>Percentage:{result.percentage}</h3>
              <h3>Remark:{result.result}</h3>
           </div>
       );
   }
}

export default ResultsPage;