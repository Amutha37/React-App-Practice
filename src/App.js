import ColorPicker from "./updatestate/ColorPicker";
import PickaColor from "./updatestate/PickaColor";
import PhoneNumber from "./updatestate/PhoneNumberValidation";

// quiz questions
import QuizNavBar from "./useprev/QuizNavBar";
import { questions } from "./useprev/dataModel";
// import from "./styles";
// import CatWeb from "./CatWeb";

export default function App() {
  return (
    <div className="container">
      <ColorPicker />
      <PickaColor />

      <PhoneNumber />

      <QuizNavBar questions={questions} />
    </div>
  );
}
