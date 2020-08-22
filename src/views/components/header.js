export const viewHeader = () => {
  const headerContainer = document.getElementById('header-container');
  headerContainer.innerHTML = `
  <div class="row" id="header">
    <img class="user-profile" src="../src/assets/user-profile.png" alt="profile">
     <div class="row">
      <p class="name-app bold">mua</p>
      <p class="name-app light">pp</p>
    </div>
    <img src="../src/assets/search.svg" alt="search">
  </div>`;

  return headerContainer;
};
viewHeader()