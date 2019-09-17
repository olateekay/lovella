import React from 'react';
import './App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `./FirstTextField`;
    this.props.history.push(path);
  }
  render() {
    return (
     <div className="Main">
       <h1 className="App">
      Welcome to LOVELLA! Your journey in love begins here!
      </h1>
      <button className="button" style={{fontSize:'100%'}}
      onClick={this.routeChange}>Begin Here</button>
     </div>
    );
  }
}  

export default Home;
