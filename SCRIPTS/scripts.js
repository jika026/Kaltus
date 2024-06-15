const hamburger = document.querySelector("header #hamburger");
const dropdownMenu = document.getElementById("dropdownMenu");
const nav = document.querySelector("nav");

// dropdown hamburger menu
hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});
//  image slider for product page

const mainImage = document.getElementById("mainImg");
const smallImage = document.getElementsByClassName("smallImg");

smallImage[0].onclick = () => {
  mainImage.src = smallImage[0].src;
};
smallImage[1].onclick = () => {
  mainImage.src = smallImage[1].src;
};
smallImage[2].onclick = () => {
  mainImage.src = smallImage[2].src;
};

// product details page tab selection

class Tab {
  constructor(container) {
    this.container = container;
    this.select = container.querySelectorAll("#more-details ul .select");
  }
  init() {
    this.select.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    this.select.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  }
  toggleContent(e) {
    this.container.querySelectorAll(".contents").forEach((item) => {
      item.classList.remove("active");
    });

    const selector = e.target.getAttribute("data-target");
    const selected = this.container.querySelector(selector);
    selected.classList.add("active");
  }
}

const tabs = new Tab(document.querySelector("#more-details"));
tabs.init();
