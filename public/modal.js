function openModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.querySelector(".transform").classList.remove("scale-95");
    modal.querySelector(".transform").classList.add("scale-100");
  }, 10); // Start the animation slightly after adding the modal to the DOM
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.querySelector(".transform").classList.remove("scale-100");
  modal.querySelector(".transform").classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // This matches the duration of the transition
}
