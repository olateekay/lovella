import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './components/Home';
import  FirstTextField  from './components/FirstTextField';
import  SecondTextField  from './components/SecondTextField';
import  LandingPage  from './components/LandingPage';
import  ResultsPage  from './components/ResultsPage';
import  NoMatch  from './components/NoMatch';

class App extends React.Component {
  render() {
    return (
     <React.Fragment>
       <Router>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/firsttextfield" component={FirstTextField} />
          <Route path="/secondtextfield" component={SecondTextField} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/resultspage" component={ResultsPage} />
          <Route component={NoMatch} />
         </Switch>
       </Router>
     </React.Fragment>
    );
  }
}  

export default App;
