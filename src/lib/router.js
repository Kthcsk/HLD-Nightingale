/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { viewHome } from '../views/pages/home.js';
import { viewInformation } from '../views/pages/information.js';

const showView = (hash) => {
  const pageContainer = document.getElementById('page-container');
  viewHome();

  switch (hash) {
    case '#/':
      pageContainer.appendChild = viewHome();
      break;
    case '#/information':
      pageContainer.appendChild = viewInformation();
      break;
    default:
      pageContainer.appendChild = 'Página no encontrada. Lo sentimos';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    showView(hash);
  } else if (hash === '#/information') {
    showView(hash);
  } else {
    showView(hash);
  }
};
