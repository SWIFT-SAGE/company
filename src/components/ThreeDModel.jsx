import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

import  Avatar  from './Avatar'
function ThreeDModel() {
   


  return (
  <Canvas id='canvas' >
    <ambientLight intensity={1}/>
    <OrbitControls />

    
    <Avatar/>
    
  </Canvas>
  )
}

export default ThreeDModel