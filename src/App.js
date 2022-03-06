import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import "./Style.css"
import Body from './Body';
import Teamfullpage from './components/team/Teamfullpage';

function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/">
            <Body/>
            </Route>
          <Route path="/team">
            <Teamfullpage/>
            </Route>
            
        </Switch>
      </Router>
   
  );
}

export default App;
