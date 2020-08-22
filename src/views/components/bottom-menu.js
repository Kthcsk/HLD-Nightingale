/* eslint-disable import/prefer-default-export */
export const viewBottomMenu = () => {
  const bottomMenuContainer = document.getElementById('bottom-menu-container');
  bottomMenuContainer.innerHTML = `
  <div class="bottom-menu row" id="bottom-menu">
    <div>
      <img class="icon" src="../src/assets/info.svg" alt="info">
      <p>Información</p>
    </div>
    <div>
      <img class="icon" src="../src/assets/mentor.svg" alt="mentor">
      <p>Mentor</p>
    </div>
    <div>
      <img class="icon" src="../src/assets/home.svg" alt="home">
      <p>Inicio</p>
    </div>
    <div>
      <img class="icon" src="../src/assets/courses.svg" alt="courses">
      <p>Cursos</p>
    </div>
    <div>
      <img class="icon" src="../src/assets/question.svg" alt="question">
      <p>Ayuda</p>
    </div>
  </div>`;

  return bottomMenuContainer;
};
viewBottomMenu();
