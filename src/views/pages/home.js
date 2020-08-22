export const viewHome = () => {
  const homeContainer = document.getElementById('page-container');
  homeContainer.innerHTML = `
  <div class="home-page">
      <div class="cover-photo column">
        <img src="../src/assets/Rectanglecover.png" alt="foto portada">
      </div>
      <div class="home-muapp row">
        <h1>¿Qué es muapp?</h1>
        <img src="../src/assets/Vectorheart.svg" alt="corazón">
        <p>Mujeres Unidas y Activas es una aplicacion mobile informar a las mujeres generando
          conexiones con profesionales y ayudando en su formación y crecimiento integral</p>
      </div>
      <button class="button" id="info-button">Más información</button>
      <div class="recomend-section column">
        <h1>Recomendados para ti</h1>
        <div class="recomend-box row">
          <img src="../src/assets/Rectangletejido.png" alt="persona tejiendo">
          <div class="recomend-detail column">
            <p class="bold">Las técnicas del tejidos</p>
            <p class="light">Gancho agujas, tunecino.</p>
          </div>
          <img src="../src/assets/Rectangleemprende.png" alt="persona">
          <div class="recomend-detail column">
            <p class="bold">Las técnicas del tejidos</p>
            <p class="light">Gancho agujas, tunecino.</p>
          </div>
        </div>
        <button class="button" id="category-button">Filtrar por categoría</button>
      </div>
    </div>
  `;

  return homeContainer;
};
viewHome();
