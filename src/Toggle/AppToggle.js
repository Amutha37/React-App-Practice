import Room from "./Flip";
import Press from "./Press";
import RandomColor from "./Randomcolor";

// import "./stylestoggle.css";

export default function AppToggle() {
  return (
    <div className="toggleapp">
      <RandomColor />
      <Room />
      <Press />
    </div>
  );
}
