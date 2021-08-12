import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Practitioners from './components/Practitioners';
import PractitionersDetails from './components/PractitionersDetails';
import Devices from './components/Devices';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/practitioners/" component={Practitioners}  />
        <Route path="/practitioners/:id" component={PractitionersDetails}  />
        <Route path="/practitioners/:id/:devices" component={Devices}  />
      </Switch>
     </Router>
    
  );
}

export default App;
