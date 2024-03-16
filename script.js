const hamburguer = document.getElementById("hamburguer");
const linksContainer = document.getElementById("links-container");
const links = document.getElementsByClassName("links");
let displaySize = window.screen.width;
const iconWhatsapp = document.getElementById("icon-whatsapp");
const contact = document.getElementById("contact");
const main = document.getElementsByClassName("body-container")[0];


iconWhatsapp.addEventListener("mouseover", () => {
  console.log("mouse over");
contact.classList.remove("hidetext")
})


iconWhatsapp.addEventListener("mouseout", () => {
  console.log("mouse out");
contact.classList.add("hidetext")
})

if (displaySize < 651) {
    linksContainer.classList.add("hide")
}


hamburguer.addEventListener("click", () => {
  linksContainer.classList.toggle("hide");
  //main.classList.toggle("padding120")
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
