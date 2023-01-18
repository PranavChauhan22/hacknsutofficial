import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import "./Style.css"
import Body from './Body';
import Rule from './components/rules/Rule';

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Body/>}>
            </Route>

          <Route path="/rules" element={<Rule/>}>
            </Route>
             
        </Routes>
      </Router>
   
  );
}

export default App;
