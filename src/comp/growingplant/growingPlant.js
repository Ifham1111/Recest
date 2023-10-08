import React from 'react'
import './GrowingPlant.scss'


//Using Props
function GrowingPlant(props) {
  
  console.log('props working fine');

  //objects
  const defaultData = {
    name: 'Default Name',
    size: '1em',
    backgroundColor: 'red',
    icon: '🌱'
  };

  //object destructering
  const { plantData = defaultData} = props;

  return (
    <div >
      <h1>I'm {plantData.name} <span style={{fontSize:  `${plantData.size}`,backgroundColor: `${plantData.backgroundColor}`}}>{plantData.icon}</span></h1>
    </div>
  )
  
}

export default GrowingPlant