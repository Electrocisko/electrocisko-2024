const hamburguer = document.getElementById("hamburguer");
const linksContainer = document.getElementById("links-container");
const links = document.getElementsByClassName("links");

hamburguer.addEventListener("click", () => {
  linksContainer.classList.toggle("hide");
});



for (let i = 0; i < links.length; i++) {
  const thisLink = links[i];
  thisLink.addEventListener("click", () => {
    thisLink.classList.add("active");

    for (let z = 0; z < links.length; z++) {
      const element = links[z];
      if (i != z) {
        element.classList.remove("active");
      }
    }
  });
}
