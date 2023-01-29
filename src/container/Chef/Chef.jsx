import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { ZoomIn } from 'react-scroll-motion';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <Zoom><h1 className='headtext__cormorant'>What we believe in</h1></Zoom>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </div>
        <p className='p__opensans'>Magni omnis recusandae quas delectus quibusdam? Minus rerum repellendus rem aliquid et necessitatibus libero, inventore, totam nostrum, dolorem voluptatum consectetur facilis recusandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus incidunt illum magni, quod, nihil dolore aspernatur quo quidem iusto doloremque modi explicabo exercitationem ut cupiditate dolores deserunt atque omnis ex!</p>
      </div>
      <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'> Chef & Founder</p>
          <img  src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
