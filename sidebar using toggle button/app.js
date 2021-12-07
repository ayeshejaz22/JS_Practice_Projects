const sidebar = document.querySelector(".sidebar");
const btnToggle = document.querySelector(".sidebar-toggle");

sidebar.classList.remove("show-sidebar");

btnToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
