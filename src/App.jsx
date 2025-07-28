import { useState, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { Navbar , Hero, Cocktails, About, Art, Menu, Contact} from './components'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function App() {
  //return function
  return (
    <>
     <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
    </>
  );
}

export default App;
