const hamburguer = document.getElementById("hamburguer");
const linksContainer = document.getElementById("links-container")


hamburguer.addEventListener("click", () => {
    console.log("clickeado");
  linksContainer.classList.toggle("hide")
})

console.log(linksContainer);