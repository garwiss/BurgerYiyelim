import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
      <h1>Hakkımızda</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates iste, beatae vero atque odit fugit itaque voluptatum? Quo architecto ut ad esse nam temporibus pariatur neque sit enim vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed quam eius eos. Voluptatem, dicta deleniti! Sit officiis eos id quae vel iure voluptates labore in consectetur quo. Consequatur, facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt adipisci aspernatur sint. Iure cumque dicta corrupti animi dolores vitae, commodi aspernatur esse tempore, voluptas fugit debitis culpa. Cumque, modi!</p>
      </div>
    </div>
  )
}
 