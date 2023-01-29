import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}
  
  <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
      <h1 className='p__opensans'>
        Contact Us
      </h1>
      <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
      <p className='p__opensans'>+1 212-345-943-049</p>
      <p className='p__opensans'>+1 212-345-943-049</p>
    </div>

    <div className='app__footer-links_logo'>
      <img  src={images.gericht} alt="footer log"/>
      <p className='p__opensans'> &quot; The best way to find yourself is to lose your self in the service of others .&quot;</p>
      <img  src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
    <div className='app__footer-links_icons'>
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />
    </div>
    </div>
  
  <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
    <p className='p__opensans'> Monday - Friday</p>
    <p className='p__opensans'> 08:00 AM - 12:00 AM</p>
    <p className='p__opensans'> Satday - Sunday</p>
    <p className='p__opensans'> 07:00 AM - 11:00 PM</p>
  </div>
  </div>
  <div className='footer__copyright'>
    <p className='p__opensans'> Designed with ❤️ by Yamin K.</p>
  </div>
  </div>
);

export default Footer;
