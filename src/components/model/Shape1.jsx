import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import  gsap  from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from "@gsap/react"
gsap.registerPlugin(useGSAP,ScrollTrigger)


export default function Shape1() {
   useGSAP(()=>{
          gsap.to('.lefe',{
            x:'100',
            scrollTrigger:{
              trigger:'.lefe',
              // start:'-200% 80%',
              // end:'400% 80%',
              scrub:true
            },
          
        
            
          })
        })
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0 lefe z-100">
      <Canvas
        className=""
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >

        <Suspense fallback={null}>
        
        
          <Geometries/>
      
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  // const geometry = new THREE.IcosahedronGeometry(3);

  const geometries = [
    {
      id: "geo0",
      position: [0, 0, 0],
      r: 0.3,
      geometry:new THREE.IcosahedronGeometry(3)
    },
    {
      id: "geo1",
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5,1.6,2,16)
    },
    {
      id: "geo2",
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5),
    },
    {
      id: "geo3",
      position: [-0.8, 0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6,0.25,16,32)
    },
    {
      id: "geo4",
      position: [1.6, 1.6, -4],
      r: 0.3,
      geometry:new THREE.OctahedronGeometry(1.5)
    },
  
  ];

  const materials = [new THREE.MeshNormalMaterial(),
    new THREE.MeshNormalMaterial({color:"#38423c",roughness:0}),
    new THREE.MeshNormalMaterial({color:"#e7e6e1",roughness:0.4}),
    new THREE.MeshNormalMaterial({color:"#241e23",roughness:0.1}),
    new THREE.MeshNormalMaterial({color:"#030516",roughness:0.1}),
    new THREE.MeshNormalMaterial({color:"#050f24",roughness:0.1}),
    new THREE.MeshNormalMaterial({color:"#3d3c3b",roughness:0.1}),
    new THREE.MeshNormalMaterial({color:"#eedfdf",roughness:0.1, metalness:0.1}),
    new THREE.MeshNormalMaterial({color:"#050408",roughness:0, metalness:0.5})

  ];

  return (
    <>
      {geometries.map(({ id, position,r, geometry }) => (

        <Geometry
          key={`${id}-${position.join(',')}`}
          r={r}
          position={position.map((p) => p * 2)}
          geometry={geometry}
          materials={materials}
        
        />
      ))}
    </>
  );
}

function Geometry({ r,position, geometry, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(true);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial(){
    return gsap.utils.random(materials)
  }

  const handleClick = (e) => {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 10)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(()=>{
   let ctx= gsap.context(()=>{
      setVisible(true)
      gsap.from(meshRef.current.scale,{
        x:0, y:0, z:0, duration:1,ease:"elastic-out(1,0,3)", delay:0.3
      });
    },meshRef);
    return () =>ctx.revert();
  },[]);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5*r} rotationIntensity={6*r} floatIntensity={5*r}>
        <mesh
          ref={meshRef}
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          material={startingMaterial}
          visible={visible}
         ></mesh>
      </Float>
    </group>
  );
}
Geometry.propTypes = {
  r: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  geometry: PropTypes.object.isRequired,
  materials: PropTypes.arrayOf(PropTypes.object).isRequired,
};


// export default Geometries;
