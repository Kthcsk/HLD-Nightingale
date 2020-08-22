/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { viewHeader } from '../components/header.js';
import { viewBottomMenu } from '../components/bottom-menu.js';

export const viewInformation = () => {
  const pageContainer = document.getElementById('page-container');
  pageContainer.innerHTML = `
    <div class="info-page column">
        <img src="../src/assets/rectangle-escritorio.png" alt="escritorio">
        <h1>¿Qué es la seccion informativa?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.</p>
        <button class="button-large" id="info-button">Más información</button>
        <h1>Categorías</h1>
        <button class="button-large-outline">Talleres</button>
        <button class="button-large-outline">Servicios de salud</button>
        <button class="button-large-outline">Servicios financieros</button>
        <button class="button-large-outline">Beneficios estatales</button>
        <button class="button-large-outline">Beneficios municipales</button>
        <button class="button-large-outline">Convenios institucionales</button>
        <button class="button-large-outline">Fundaciones</button>
    </div>
    `;
  viewHeader();
  viewBottomMenu();
  return pageContainer;
};

viewInformation();
