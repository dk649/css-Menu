window.onload = function () {
  console.log("Page and all resources have loaded!");
  const menuEl = document.getElementById("open-sidebar-button");
  const navbarEl = document.getElementById("navbar");
  const closeEl = document.getElementById("close-sidebar-button");
  const overlayEl = document.getElementById("overlay");

  function openSideBar() {
    // console.log("open sidebar");
    navbarEl.classList.add("show");
    menuEl.setAttribute("aria-expanded", "true");
  }

  function closeSidBar() {
    navbarEl.classList.remove("show");
    menuEl.setAttribute("aria-expanded", "false");
  }

  menuEl.addEventListener("click", () => openSideBar());

  closeEl.addEventListener("click", () => closeSidBar());

  overlayEl.addEventListener("click", () => {
    // console.log("overlay clicked");

    closeSidBar();
  });
};
