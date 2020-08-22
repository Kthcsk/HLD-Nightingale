/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { viewHeader } from '../components/header.js';
import { viewBottomMenu } from '../components/bottom-menu.js';

export const viewHome = () => {
  const homeContainer = document.getElementById('page-container');
  homeContainer.innerHTML = `
  <div class="home-page">
      <div class="cover-photo column">
        <img src="../src/assets/rectangle-cover.png" alt="foto portada">
      </div>
      <div class="home-muapp row">
        <h1 class="subtitle">¿Qué es muapp?</h1>
        <img src="../src/assets/vector-heart.svg" alt="corazón">
      </div>
      <p class="text-subtitle">Mujeres Unidas y Activas es una aplicacion mobile informar a las mujeres generando
          conexiones con profesionales y ayudando en su formación y crecimiento integral</p>
      <button class="button-large" id="info-button">Más información</button>
      <div class="recomend-section column">
        <h1>Recomendados para ti</h1>
        <div class="recomend-box row">
          <img src="../src/assets/rectangle-tejido.png" alt="persona tejiendo">
          <div class="recomend-detail column">
            <p class="bold">Las técnicas del tejidos</p>
            <p class="light">Gancho agujas, tunecino.</p>
            <button class="button-medium-outline">Ver video</button>
          </div>
          <img src="../src/assets/rectangle-emprende.png" alt="persona">
          <div class="recomend-detail column">
            <p class="bold">¡Emprende ya!</p>
            <p class="light">Apoyo en redes sociales</p>
            <button class="button-medium-outline">Ver video</button>
          </div>
          <img src="../src/assets/rectangle-therapy.png" alt="manos juntas">
          <p class="bold">Terapia de grupo</p>
          <p class="light">Mujeres siempre unidas</p>
          <button class="button-medium-outline">Ver video</button>
        </div>
        <button class="button-large" id="category-button">Filtrar por categoría</button>
      </div>
    </div>
  `;

  viewHeader();
  viewBottomMenu();
  return homeContainer;
};
viewHome();