// getting data from products.json
let firstProducts = null;
fetch("SCRIPTS/JSON/topProducts.json")
  .then((response) => response.json())
  .then((data) => {
    firstProducts = data;
    addFirstDataToHTML();
  });

function addFirstDataToHTML() {
  let listProduct = document.getElementById("productContainerOne");
  firstProducts.forEach((product) => {
    let newProduct = document.createElement("a");
    newProduct.href = "/sproduct.html?id=" + product.id;
    newProduct.classList.add("products-content");
    newProduct.classList.add("first-products-content");

    newProduct.innerHTML = `
            <div class="product">
              <img src="${product.Image}" />
            </div>
            <div>
              <p>ABAYA</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          `;
    listProduct.appendChild(newProduct);
  });
}

let secondProducts = null;
fetch("SCRIPTS/JSON/bottomProducts.json")
  .then((response) => response.json())
  .then((data) => {
    secondProducts = data;
    addsecondDataToHTML();
  });

function addsecondDataToHTML() {
  let listProduct = document.getElementById("productContainerTwo");
  secondProducts.forEach((product) => {
    let newProduct = document.createElement("a");
    newProduct.href = "/sproduct.html?id=" + product.id;
    newProduct.classList.add("products-content");
    newProduct.classList.add("second-products-content");

    newProduct.innerHTML = `
            <div class="product">
              <img src="${product.Image}" />
            </div>
            <div>
              <p>ABAYA</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          `;
    listProduct.appendChild(newProduct);
  });
}
