import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import tools from './functions/tools.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

tools.smoothScrolling();
// Get the navbar
var navbar = document.getElementById("menu-side");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function () { 
tools.stickyNavbar(sticky, navbar);
 };



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
