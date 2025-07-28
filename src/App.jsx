import { useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { Navbar , Hero } from './components'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function App() {
  //return function
  return (
    <>
     <Navbar/>
    <Hero/>
    </>
  );
}

export default App;
