window.onload = function () {
  console.log("Page and all resources have loaded!");
  const menuEl = document.getElementById("open-sidebar-button");
  const navbarEl = document.getElementById("navbar");
  const closeEl = document.getElementById("close-sidebar-button");
  function openSideBar() {
    // console.log("open sidebar");
    navbarEl.classList.add("show");
  }

  function closeSidBar() {
    navbarEl.classList.remove("show");
  }

  menuEl.addEventListener("click", () => openSideBar());

  closeEl.addEventListener("click", () => closeSidBar());
};
