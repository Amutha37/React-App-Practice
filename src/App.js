import Navbar from "./Navbar";
import Buttoncount from "./Buttoncount";
import BackGroundColor from "./BackGroundColor";
import CatApp from "./CatWeb/CatApp";

import Card from "./Card";
// Adding router
// import { BrowserRouter as Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Card />
            </Route>
            <Route exact path="/buttoncount">
              <Buttoncount />
            </Route>
            <Route exact path="/catapp">
              <CatApp />
            </Route>
            <Route path="/backgroundcolor">
              <BackGroundColor />
            </Route>
          </Switch>

          {/* <CatApp />  */}
        </div>
      </div>
    </Router>
  );
}

export default App;
