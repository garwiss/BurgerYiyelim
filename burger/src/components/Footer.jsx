import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'

export const Footer = () => {
  const iconClick = ()=>{
    window.location.href = 'https://www.youtube.com/channel/UC8Hzo9_dwp62eHsahGk0G-A'
  }
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon onClick={()=> window.location.href='https://www.facebook.com/burgeryiyelim'}/>
            <InstagramIcon onClick={()=>window.location.href = 'https://www.instagram.com/burgeryiyelimm/?hl=tr'}/>
            <YouTubeIcon onClick={iconClick}/>
        </div>
        <p>TÜM HAKLARI SAKLIDIR | BURGER YİYELİM</p>
    </div>
  )
} 

