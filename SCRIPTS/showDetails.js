let products = null;
let productId = new URLSearchParams(window.location.search).get("id");
fetch("SCRIPTS/JSON/allProducts.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    let matchedProductGroup = null;

    for (let i = 0; i < products.length; i++) {
      let group = products[i];

      for (let j = 0; j < group.length; j++) {
        if (productId == group[j].id) {
          matchedProductGroup = group;
          break;
        }
      }
      if (matchedProductGroup) break;
    }
    if (matchedProductGroup) {
      products = matchedProductGroup;
      showDetails();
    } else {
      console.error("No product found with the given ID:", productId);
      alert(
        "No product found with the given ID. Please check the URL or contact support."
      );
      window.location.href = "/";
    }
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    alert("Error loading products. Please try again.");
  });
function showDetails() {
  let thisProduct = products.filter((value) => {
    return value.id == productId;
  })[0];
  // if (!thisProduct) {
  //   window.location.href = "/";
  // }
  document.querySelector(".product-name").innerText = thisProduct.name;
  document.getElementById("text").innerText = thisProduct.description;
  document.querySelector(".price").innerText = thisProduct.price;
  document.querySelector(".product-code").innerText =
    "Product Code :" + " " + thisProduct.code;
  document.querySelector(
    ".review p"
  ).innerText = `${thisProduct.rating} | ${thisProduct.reviews} reviews | ${thisProduct.sales} sold`;
  document.querySelector(".main-image img").src = thisProduct.mainImage;
  document.querySelector(".front-image img").src = thisProduct.mainImage;
  document.querySelector(".side-image img").src = thisProduct.sideImage;
  document.querySelector(".back-image img").src = thisProduct.backImage;
}
