import React from 'react'
import { Container } from './Style';
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
            <a href="https://www.linkedin.com/in/gustavofraposo/">
                <FaLinkedin color='rgba(240, 100, 60)'/>
                <span>/gustavofraposo</span>
            </a>
            <a href="https://github.com/gustavoraposo">
                <FaGithub color='rgba(240, 100, 60)'/>
                <span>/gustavoraposo</span>
            </a>
            <a href="https://wa.me/5541991892409">
                <FaWhatsapp color='rgba(240, 100, 60)'/>
                <span>WhatsApp</span>
            </a>
            <a href="mailto:gustavo_f.raposo@hotmail.com">
                <FaMailBulk color='rgba(240, 100, 60)'/>
                <span>gustavo_f.raposo@hotmail.com</span>
            </a>
            <a href='tel:+5541999806797'>
                <FaPhone color='rgba(240, 100, 60)'/>
                <span>+5541991892409</span>
            </a>
    </Container>
  );
}

export default Footer