/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { viewHeader } from '../components/header.js';
import { viewBottomMenu } from '../components/bottom-menu.js';

export const viewInformation = () => {
  const pageContainer = document.getElementById('page-container');
  pageContainer.innerHTML = `
    <div class="info-page column">
        <img class="cover-photo" src="../src/assets/rectangle-escritorio.png" alt="escritorio">
        <h1 class="subtitle">¿Qué es la seccion informativa?</h1>
        <p class="text-subtitle">¡Entender es poder! a continuacion encontraras informacion de distintas tematicas que te ayudaran generar nuevas ideas, crecer laboralmente, a mejorar de forma holistica y a empoderarte como mujer.</p>
        <a class="link margin-fix" id="info-button">Leer más...</a>
        <h1 class="subtitle-two">Categorías</h1>
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
