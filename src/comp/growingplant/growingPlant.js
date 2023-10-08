import React from 'react'
import './GrowingPlant.scss'

function GrowingPlant() {

  const planstyle = {
    color: 'red'
  }

  return (
    <div >
      <div className='plant1'>growingPlant</div>
      <div style={planstyle}>plant 2</div>
      <div style={{color: 'blue'}}>plant 3</div>
    </div>
  )
}

export default GrowingPlant