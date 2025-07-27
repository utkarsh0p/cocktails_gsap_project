import { useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function App() {
  //return function
  return (
    <>
      <div className="flex-center"><p>hello MotherFucker</p></div>
    </>
  );
}

export default App;
