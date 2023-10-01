import React from 'react'
import './App.scss'
import {Link} from 'react-router-dom'
const home = () => {
  return (
   <section className="home">
    <img src='/assets/dices.png' alt="" />
    <div className="home-content">
        <h1>DICE GAME</h1>
        <Link to='/game' className='link'>Play Now</Link>
    </div>
   </section>
  )
}

export default home
