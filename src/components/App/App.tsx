import People from '../People'
import Films from '../Films'
import Planets from '../Planets'
import Starships from '../Starships'
import SpeciesPlural from '../SpeciesPlural'
import Vehicles from '../Vehicles'
import Nav from '../Nav'
import HomeForm from '../HomeForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component = {HomeForm}/>
        <Route path="/People" exact component={People}/>
        <Route path="/Films" exact component={Films}/>
        <Route path="/Planets" exact component={Planets}/>
        <Route path="/Starships" exact component={Starships}/>
        <Route path="/Species" exact component={SpeciesPlural}/>
        <Route path="/Vehicles" exact component={Vehicles}/>
      </Switch>
    </Router>

  );
}
export default App;


