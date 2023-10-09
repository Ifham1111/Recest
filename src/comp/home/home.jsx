import React from 'react'
import GrowingPlant from '../growingplant/growingPlant'

function Home() {

  console.log('Home page running fine'); 
  
  const plantData1 = {
    name : 'Rose',
    color: 'red',
    backgroundColor: 'green',
    icon : '🌹',
    size : 30,
    aboutMe: [
      'I am a rose',
      'I am red in color',
      'I am very thorny',
      'I am a happy flower'
    ]
  }

  const plantData2 = {
    name : 'Sunflower',
    color: 'Yellow',
    backgroundColor: 'green',
    icon : '🌻',
    size : 30,
    aboutMe: [
      'I am a sunflower',
      'I am yellow in color',
      'I am very tall',
      'I am a happy flower'
    ]
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