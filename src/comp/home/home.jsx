import React from 'react'
import GrowingPlant from '../growingplant/growingPlant'

function Home() {

  console.log('Home page running fine'); 
  
  const plantData1 = {
    name : 'Rose',
    color: 'red',
    backgroundColor: 'green',
    icon : '🌹',
    size : 30
  }

  const plantData2 = {
    name : 'Sunflower',
    color: 'Yellow',
    backgroundColor: 'green',
    icon : '🌻',
    size : 30
  }

  return (
    <div>
        <h1>My personal info</h1>
        <GrowingPlant plantData={plantData1}/>
        <GrowingPlant plantData={plantData2}/>
        <GrowingPlant />
    </div>
  )
  
}

export default Home