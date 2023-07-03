import Swiper, { Mousewheel } from 'swiper';

import 'swiper/css';
import './style.css';

const swiper = new Swiper('.mySwiper', {
  modules: [Mousewheel],
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  speed: 1000,
  loop: true,
});
