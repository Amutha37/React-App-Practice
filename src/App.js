import Navbar from "./Navbar";
import Buttoncount from "./Buttoncount";
import BackGroundColor from "./BackGroundColor";
import CatApp from "./CatWeb/CatApp";

import Card from "./Card";
// Adding router
// import { BrowserRouter as Switch, Route } from "react-router-dom";
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
            {/* <Redirect exact to="/home" /> */}

            {/* <Route exact path="/" >
              
            </Route> */}
            {/* <Route exact path={["/", "/home"]}>
              <Card />
            </Route> */}
            {/* <Route exact path="/home">
              <Card /> */}
            {/* </Route> */}
            <Route exact path="/catapp">
              <CatApp />
            </Route>
            <Route exact path="/buttoncount">
              <Buttoncount />
            </Route>
            <Route exact path="/backgroundcolor">
              <BackGroundColor />
            </Route>
            <Route>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home">
                <Card />
              </Route>
            </Route>
          </Switch>

          {/* <CatApp />  */}
        </div>
      </div>
    </Router>
  );
}

export default App;
