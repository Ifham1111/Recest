import React from 'react'
import GrowingPlant from '../growingplant/growingPlant'

function Home() {
  console.log('Home page running fine');
  return (
    <div>
        <h1>My personal info</h1>
        <GrowingPlant />
    </div>
  )
}

export default Home