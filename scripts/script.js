const cols = document.querySelectorAll(".sobre .col")

window.addEventListener("scroll", () => {
  cols.forEach((col) => {
    const top = col.getBoundingClientRect().top
    if (top < window.innerHeight - 100) {
      col.classList.add("visible")
    }
  })
})
