import fn from './test.js';
import a from './images/1.png';
import './css/index.css';
// import $ from 'jquery';

// import './css/test.scss';
let dom = document.createElement('div');
dom.classList.add('haha');
document.body.append(dom);
console.log(document.querySelector('.haha'))
console.log($('.haha'));
