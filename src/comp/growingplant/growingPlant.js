import React from 'react'
import './GrowingPlant.scss'

function GrowingPlant() {

  const plantData = {
    name : 'Rose',
    color: 'red',
    backgroundColor: 'green',
    icon : '🌹',
    size : 30
  }

  return (
    <div >
      <h1>I'm {plantData.name} <span style={{fontSize:  `${plantData.size}`,backgroundColor: `${plantData.backgroundColor}`}}>{plantData.icon}</span></h1>
    </div>
  )
}

export default GrowingPlant