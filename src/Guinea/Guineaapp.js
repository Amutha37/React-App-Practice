import { useState, useEffect } from "react";

import "./styleguinea.css";
import { GuineaPigs } from "./GuineaPigs";
const GUINEAPATHS = [
  "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpbmVhJTIwcGlnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1612267164616-6a74dfe128f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGd1aW5lYSUyMHBpZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1548767782-3e3135d4725b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGd1aW5lYSUyMHBpZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];
export default function App() {
  const [currentpig, setCurrentPig] = useState(0);

  const nextGP = () => {
    setCurrentPig((prevCurrentpig) => ++prevCurrentpig % GUINEAPATHS.length);
  };

  useEffect(() => {
    let interval = setInterval(nextGP, 2000);
    return () => clearInterval(interval);
  }, []);

  const src = GUINEAPATHS[currentpig];

  return (
    <div className="Appguinea">
      <h1>Cute Guinea Pigs</h1>
      <GuineaPigs src={src} />
    </div>
  );
}
