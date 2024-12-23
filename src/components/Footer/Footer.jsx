import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
<div className='footer' id='footer'>
<div className="footer-content">
<div className="footer-content-left">
  <img src={assets.logo} alt="" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit facere odit ab repudiandae vel enim adipisci iure omnis saepe, deleniti sunt Nostrum alias, 
  exercitationem quod iure enim labore beatae nihil praesentium perferendis vero! Ab velit non architecto.</p>
<div className="footer-social-icons">
  <img src={assets.facebook_icon} alt="" />
  <img src={assets.twitter_icon} alt="" />
  <img src={assets.linkedin_icon} alt="" />
</div>
</div>
<div className="footer-content-center">
  <h2>COMPANY</h2>
<ul>
  <li>Home</li>
  <li>About us</li>
  <li>Delivery</li>
  <li>Privacy policy</li>
</ul>
</div>
<div className="footer-content-right">
  <h2>GET IN TOUCH</h2>
<ul>
  <li>+1-212-345-7-6789</li>
  <li>contact@tomato.com</li>
</ul>
</div>
</div> 
  <hr />
<p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
</div>
  )
}

export default Footer
