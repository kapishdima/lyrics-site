import Swiper, { Mousewheel } from 'swiper';

import 'swiper/css';
import './style.css';

const colors = [
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
  'rgba(46, 204, 113, 1.0)',
  'rgba(230, 126, 34, 1.0)',
  'rgba(26, 188, 156, 1.0)',
];

const swiper = new Swiper('.mySwiper', {
  modules: [Mousewheel],
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  speed: 1000,
  loop: true,
});

const color = colors[0];

document.body.style.backgroundColor = color;

swiper.on('scroll', (swiper, event) => {
  const active = swiper.realIndex;
  const color = colors[active];

  document.body.style.backgroundColor = color;
});
