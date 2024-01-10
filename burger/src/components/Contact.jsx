import React from 'react'
import BannerImageContac from '../assets/banner.png'
import '../styles/Contact.css'
import {Link} from 'react-router-dom'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'style={{backgroundImage:`url(${BannerImageContac})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input 
          type="text" 
          name='name' 
          placeholder='Adınız ve soyadınızı giriniz' 
          />
            <label>Email</label>
          <input 
          type="email" 
          name='email' 
          placeholder='email giriniz' 
          />
            <label>Mesajınız</label>
            <textarea
            rows={"6"}
            name='message'
            placeholder='Lütfen mesajınızı giriniz'
            ></textarea>
        <button><Link to={"#"} style={{textDecoration:"none",color:"#fff"}}>Gönder</Link></button>  
        </form>
      </div>
    </div>
  )
}
 