/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { viewHeader } from '../components/header.js';
import { viewBottomMenu } from '../components/bottom-menu.js';

export const viewHome = () => {
  const homeContainer = document.getElementById('page-container');
  homeContainer.innerHTML = `
  <div class="home-page column">
      <div class="cover-photo">
        <img src="../src/assets/rectangle-cover.png" alt="foto portada">
      </div>
      <h1 class="subtitle">¿Qué es muapp?</h1>
      <p class="text-subtitle">Mujeres Unidas y Activas es una aplicacion mobile informar a las mujeres generando
          conexiones con profesionales y ayudando en su formación y crecimiento integral.</p>
      <button class="button-large" id="info-button">Más información</button>
      <div class="recomend-section column">
        <h1 class="subtitle-two">Cursos recomendados</h1>
        <div class="recomend-box column">
          <div class="recomend-detail row">
            <img class="square-img" src="../src/assets/rectangle-tejido.png" alt="persona tejiendo">
            <div class="recomend-detail column">
              <div class="recomend-text">
                <p class="bold">Las técnicas del tejidos</p>
                <p class="light">Gancho agujas, tunecino.</p>
              </div>  
              <a class="link">Ver curso</a>
            </div>
          </div>
          <div class="recomend-detail row">
            <img class="square-img" src="../src/assets/rectangle-emprende.png" alt="persona">
            <div class="column">
              <div class="recomend-text">
                <p class="bold">¡Emprende ya!</p>
                <p class="light">Apoyo en redes sociales</p>
              </div>
              <a class="link">Ver curso</a>
            </div>
          </div>
          <div class="recomend-detail row">
            <img class="square-img" src="../src/assets/rectangle-therapy.png" alt="manos juntas">
            <div class="column">
              <div class="recomend-text">
                <p class="bold">Terapia de grupo</p>
                <p class="light">Mujeres siempre unidas</p>
              </div>
              <a class="link">Ver curso</a>
            </div>
           </div> 
        </div>
        <button class="button-large" id="category-button">Ver otros cursos</button>
      </div>
    </div>
  `;

  viewHeader();
  viewBottomMenu();
  return homeContainer;
};
viewHome();
