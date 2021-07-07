import React, { Suspense } from 'react'
import GlobalStyles from './GlobalStyles'
import Skeleton from './components/Skeleton'
import Light from './components/Light'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Canvas>
      <Suspense fallback={null}>
        <Skeleton />
        <Light />
      </Suspense>
      <OrbitControls />
    </Canvas>
    </>
  )
}

export default App