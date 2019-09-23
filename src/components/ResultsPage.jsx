import React from 'react';

class ResultsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fname: props.location.state.fname,
            sname: props.location.state.sname,
            percentage: props.location.state.percentage,
            result: props.location.state.result
        };
    this.routeChange = this.routeChange.bind(this);
    }

   render (){
       return(
           <div>
              <h1>Results</h1> 
              <h3>First Name:{this.props.location.state.fname}</h3>
              <h3>Second Name:{this.props.location.state.name}</h3>
              <h3>Percentage:{this.props.location.state.rcentage}</h3>
              <h3>Remark:{this.props.location.state.result}</h3>
           </div>
       );
   }
}

export default ResultsPage;