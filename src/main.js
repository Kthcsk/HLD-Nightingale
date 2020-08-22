import { viewHome } from './views/pages/home.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  window.onload = () => { viewHome(); };
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init());
