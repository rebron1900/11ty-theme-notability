/* ***** ----------------------------------------------- ***** **
/* ***** Main JS
/* ***** ----------------------------------------------- ***** */

// import { format } from "timeago.js";
// import DefaultTransition from './transitions/Default'
// import { setActiveLink, updateBodyClasses, trackGA } from './components/taxi.js'
// import { init as globalInit } from './components/global.js'
// import Scroll2Reveal from './vendors/Scroll2Reveal.js'

// // Init on first load
// globalInit()
// const s2r = new Scroll2Reveal()

// // Init Taxi
// const taxi = new Core({
//   transitions: {
//     default: DefaultTransition,
//   },
// })

// // Executed at the start of every page load
// taxi.on('NAVIGATE_IN', ({ to }) => {
//   setActiveLink()
//   updateBodyClasses(to)
//   s2r.reInit()
// })

// // Executed when the page has loaded completely
// taxi.on('NAVIGATE_END', ({ to }) => {
//   trackGA(to)
// })

// Lately.init({ target: 'time, .lately' });
import { initComment } from "./components/comment.js";
import eventHandler from "./components/handler.js"
import initMediumZoom  from "./components/image_medium.js"
import { Core } from '@unseenco/taxi'


// init
initComment(window.commentinfo);
eventHandler();
initMediumZoom();


//init kg-gallery-image
var gallery = document.querySelectorAll(".kg-gallery-image img");
gallery.forEach(function(e) {
    var l = e.closest(".kg-gallery-image")
      , a = e.attributes.width.value / e.attributes.height.value;
    l.style.flex = a + " 1 0%"
});


const taxi = new Core()