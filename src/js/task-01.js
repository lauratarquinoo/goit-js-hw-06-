const categoriesList = document.getElementById("categories");
const categoriesItems = document.querySelectorAll(".tem");
const numberCategories = categoriesItems.length;
console.log(` La cantidad de categorias es: ${numberCategories}`);

for (let i = 0; i < numberCategories; i++) {
  const categorie = categoriesItems[i];
  const tittle = categorie.querySelector("h2").textContent;
  const elements categorie.querySelectorAll("li").length;
  console.log("Categories : "+tittle);
  console.log("Cantidad de elementos :" + elements);
}
