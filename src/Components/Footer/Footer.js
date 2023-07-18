import React from 'react'
import './Footer.css'
import Img from "../../images/logo.svg"
import FooterLinks from './FooterLinks/FooterLinks'

const Footer = () => {
  return (
   <section className="footer">
    <div className="logo">
        <img src={Img} alt="" />
    </div>
    <FooterLinks/>
   </section>

  )
}

export default Footer