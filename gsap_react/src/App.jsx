import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';

const App = () => {

  const boxRef = useRef();

  const {contextSafe} = useGSAP();
  const rotateBox = 
    contextSafe(() => {
      gsap.to(boxRef.current, { 
        duration: 1, 
        rotation: 360 
      });
    });

  return (
    <>
      <main>
        <button onClick={rotateBox}>Animate</button>
        <div ref={boxRef} className="box"></div>
      </main>
    </>
  )
}

export default App