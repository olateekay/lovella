import React from 'react';
import './App.css';
import BG from '../media/beautiful-bloom-blooming-697259.jpg';

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
      <div className='wrapper'>
        <section
          id="top"
          className="header"
          style={{ backgroundImage: `url(${BG})` ,  
                   width: "100%",
                   height: "550px",
                   backgroundPosition: 'center',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat'
                  }}
        >
          <div className="Main" >
            <h1 className="App">
              Welcome to LOVELLA! Your journey in love begins here!
            </h1>
            <button className="button" style={{ fontSize: '100%' }}
              onClick={this.routeChange}>Begin Here</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
