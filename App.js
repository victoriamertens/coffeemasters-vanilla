import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// //With defer ti is better to wait for the event of DOMContentLoaded to occur before manipulation
// window.addEventListener('DOMContentLoaded', () => {
//   let nav = document.querySelector('nav');
//   console.log(nav.innerText);
//   nav.innerHTML = `<h2>Hello DOM!</h2>`;
// });

// //When does this run?

// //Alias or wrapper for querySelector can be $ or _, like in jQuery

// const $ = () => document.querySelector.call(this, arguments);
// const _ = {
//   domready: (e) => {
//     console.log(e);
//   },
// };
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// _.domready('test');

//Adding services to make gloabl store
window.App = {};
App.store = Store;
App.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  console.log(App);
  loadData();
  App.router.init();
});
