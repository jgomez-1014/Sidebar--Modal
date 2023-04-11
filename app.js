// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtnModal = document.querySelector(".close-btn-modal");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtnModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtnSide = document.querySelector(".close-btn-side");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtnSide.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});