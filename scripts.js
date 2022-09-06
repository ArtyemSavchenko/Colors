const colors = [
  "IndianRed",
  "MediumPurple",
  "DarkCyan",
  "Teal",
  "CadetBlue",
  "SteelBlue",
  "LightCoral",
  "Salmon",
  "LightSalmon",
  "LightPink",
  "HotPink",
  "Coral",
  "Tomato",
  "DarkKhaki",
  "BurlyWood",
  "RosyBrown",
  "SandyBrown",
  "Peru",
  "MediumSeaGreen",
  "LightSeaGreen",
  "CornflowerBlue",
].map((color) => color.toLowerCase());

const page = document.querySelector(".page");
const colorTemplate = document.querySelector("#color-template").content;

colors.forEach((color) => {
  const colorEl = colorTemplate.cloneNode(true);
  colorEl.querySelector(".color").style.backgroundColor = color;
  const colorBtn = colorEl.querySelector(".color__name");
  colorBtn.textContent = color;
  colorBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(color).then(
      () => {
        console.log(color);
        colorBtn.classList.add("color__name_accept");
        setTimeout(() => {
          colorBtn.classList.remove("color__name_accept");
        }, 900);
      },
      (err) => {
        console.error("Ошибка: ", err);
      }
    );
  });

  page.prepend(colorEl);
});
