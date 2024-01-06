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

initComment();
eventHandler();