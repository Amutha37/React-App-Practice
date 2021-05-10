import Room from "./Toggle";
import Press from "./Press";
import RandomColor from "./Randomcolor";
import "./stylestoggle.css";
// import "./BackGroundColor.css";
export default function AppToggle() {
  return (
    <div className="Appp">
      {/* <h1>Toggle using components</h1> */}

      <RandomColor />
      <Room />
      <Press />
    </div>
  );
}
