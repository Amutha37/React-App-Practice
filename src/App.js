import Navbar from "./Navbar";
import Buttoncount from "./Buttoncount";
import BackGroundColor from "./BackGroundColor";
import CatApp from "./CatWeb/CatApp";

import LetterCount from "./LetterCount/AppLet";
import AppToggle from "./Toggle/AppToggle";
import CopyCat from "./Copycat/CopyCatApp";
import Guineapig from "./Guinea/Guineaapp";
import Classapp from "./Classcomponents/Classapp";
import Card from "./Card";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/catapp">
              <CatApp />
            </Route>
            <Route exact path="/buttoncount">
              <Buttoncount />
            </Route>
            <Route exact path="/backgroundcolor">
              <BackGroundColor />
            </Route>
            <Route exact path="/lettercount">
              <LetterCount />
            </Route>
            <Route exact path="/toggleapp">
              <AppToggle />
            </Route>
            <Route exact path="/copycat">
              <CopyCat />
            </Route>
            <Route exact path="/guineapig">
              <Guineapig />
            </Route>
            <Route exact path="/classapp">
              <Classapp />
            </Route>
            {/* exclude for  home button  */}
            <Route>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home">
                <Card />
              </Route>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
