export const viewBottomMenu = () => {
  const bottomMenuContainer = document.getElementById('bottom-menu-container');
  bottomMenuContainer.innerHTML = `
  <div class="bottom-menu row align-items" id="bottom-menu">
    <div class="column">
      <img class="icon info" src="../src/assets/info.svg" alt="info">
      <p class="text-icon">Información</p>
    </div>
    <div class="column">
      <img class="icon mentor" src="../src/assets/mentor.svg" alt="mentor">
      <p class="text-icon">Mentor</p>
    </div>
    <div class="column">
      <img class="icon home" src="../src/assets/home.svg" alt="home">
      <p class="text-icon">Inicio</p>
    </div>
    <div class="column">
      <img class="icon courses" src="../src/assets/courses.svg" alt="courses">
      <p class="text-icon">Cursos</p>
    </div>
    <div class="column">
      <img class="icon question" src="../src/assets/question.svg" alt="question">
      <p class="text-icon">Ayuda</p>
    </div>
  </div>`;

  return bottomMenuContainer;
};
viewBottomMenu()