import Swiper, { Mousewheel } from 'swiper';

import 'swiper/css';
import './style-2.css';

const bodyColors = [
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
  'rgba(46, 204, 113, 0.5)',
  'rgba(230, 126, 34, 0.5)',
  'rgba(26, 188, 156, 0.5)',
];
const slideColors = [
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

const bodyColor = bodyColors[0];
const slideColor = slideColors[0];

document.body.style.backgroundColor = bodyColor;

document.querySelectorAll('.swiper-slide').forEach((slide) => {
  slide.style.backgroundColor = '';
});
document.querySelector('.swiper-slide.swiper-slide-next').style.backgroundColor = slideColor;

swiper.on('scroll', (swiper, event) => {
  const active = swiper.realIndex;
  const bodyColor = bodyColors[active];
  const slideColor = slideColors[active];

  console.log(active);

  document.body.style.backgroundColor = bodyColor;

  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    slide.style.backgroundColor = '';
  });
  document.querySelector('.swiper-slide.swiper-slide-next').style.backgroundColor = slideColor;
});
