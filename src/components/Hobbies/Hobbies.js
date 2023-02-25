import React from 'react'
import uniqid from 'uniqid'
import { hobbies } from '../../portfolio'
import HobbyContainer from '../HobbyContainer/HobbyContainer'


function Hobbies() {
  return (
    <section id='projects' className='section projects'>
    <h2 className='section__title'>Hobbies</h2>
    <div className='hobby_sub'>
      <h3 >Blender</h3>
      {/* <p></p> */}
    </div>
    <div className='projects__grid'>
      {hobbies.map((hobby) => (
        <HobbyContainer key={uniqid()} hobby={hobby} />
      ))}
    </div>
  </section>
)
}


export default Hobbies
