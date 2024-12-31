// @copyright 2024 Ayush Pandey
// @license Apache-2.0

import {ReactLenis} from "lenis/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
import { lazy } from "react";
gsap.registerPlugin(useGSAP,ScrollTrigger)



import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/About/About.jsx"
import Skill from "./components/Skill/Skill.jsx";
import Work from "./components/Work/Work.jsx";
import Shape from "./components/model/Shape.jsx";
import Shape1 from "./components/model/Shape1.jsx";
import CP from "./components/CP/CP.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"

const Robot = lazy(() => import("./components/model/Robot.jsx"));

import React ,{useEffect,startTransition} from "react";
const App = () => {
  const [showRobot, setShowRobot] = React.useState(false);

  useEffect(() => {
    // Defer rendering of the Robot component to avoid blocking synchronous updates
    startTransition(() => {
      setShowRobot(true);
    });
  }, [])
  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:"-50 bottom",
          end:"bottom 20%",
          scrub:true,
         
        },
        y:0,
        opacity:1,
        duration:1,
        ease: "power2.out"
      })
    })
})
  return (
    <ReactLenis root>
    <div className="app relative">
      <header>
        <Header />
      </header>
      
        <div className="w-full lg:max-w-[60%] ml-auto rounded-[60px] md:max-w-[400px] sm:max-w-[400px] overflow-hidden absolute right-0 lg:right-[20%] top-40 sm:top-0 ">
        <Shape/>
        </div>
      <main>
      
        <Hero />
      
        <About />
        <div className="w-full max-w-[30%] ml-auto rounded-[60px] overflow-hidden absolute right-0 hidden lg:block">
        <Shape1/>
        </div>
        <Skill />
        <div className="w-full max-w-[100%] ml-auto rounded-[60px] overflow-hidden absolute hidden md:block">
        <Shape1/>
        </div>
        <Work />
        <div className="flex justify-center items-center">
            {showRobot ? <Robot /> : null}
          </div>
        <CP/>
        <Contact/>
        <Footer/>

      
      </main>
    

        
    </div>
    </ReactLenis>
  );
};

export default App;
