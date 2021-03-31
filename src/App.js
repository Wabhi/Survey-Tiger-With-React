import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './survey.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from "./Components/Menu"
import CreateSurvey from "./Components/CreateSurvey"
import Published from "./Components/Published"
import { useState } from 'react';
import {Link} from 'react-router-dom'

function App() {
  const [squestion,setSquestion] = useState([])
  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
          <Link to="/">
             <img className="col-md-6" alt="logo" src={Logo} height="100px" width="400px" />
          </Link>
          <Switch>
            <Route path="/" component={Menu}  exact/>
            <Route path="/create" >
              <CreateSurvey squestion={squestion} setSquestion={setSquestion}/>
            </Route>
            <Route path="/publish">
              <Published questions={squestion}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
