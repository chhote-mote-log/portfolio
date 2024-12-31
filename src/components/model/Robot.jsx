import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useProgress,
  Html,

  useAnimations,

} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

import gsap from "gsap"


useGLTF.preload("/robot_playground.glb");

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

const Robot = () => {
 
  return (
    <div className="h-[800px] w-[100%] row-span-1 row-start-1 aspect-square overflow-hidden robo">
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
      

          <Model />
          
      
      </Suspense>
    </Canvas>
    </div>
  );
};

function Model() {
  const group = useRef(null);
  const { animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);
 
  useEffect(() => {
    if (actions && actions["Experiment"]) {
      const animationAction = actions["Experiment"];
      const duration = animationAction.getClip().duration;

  
      animationAction.play();
      animationAction.paused = true;

      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".robo", 
          start: "top+=600 bottom", 
          end: "bottom-=300 top", 
          scrub: true,
          pin: true, 
          pinSpacing: true, 
     
        },
      });
  
    
      tl.to(group.current.scale, {
        x: 1.3,
        y: 1.3,
        z: 1.3,
        duration: 0.1, 
        ease: "power1.inOut", 
      });
  
      
      tl.to(
        animationAction,
        {
          time: duration, 
          ease: "none", 
        },
        "<" 
      );
      tl.to(group.current.scale, {
        x: 1,
        y: 1,
        z: 1, 
        duration: 0.1, 
        ease: "power1.inOut",
      });
    }
  }, [actions]);



  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default Robot;
