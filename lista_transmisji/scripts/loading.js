document.addEventListener("DOMContentLoaded", () => {
  const loadingBar = document.getElementById("loading-bar");

  setTimeout(() => {
    loadingBar.classList.add("loading-animation");
  }, 100);

  loadingBar.addEventListener("transitionend", () => {
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 500);
  });
});
