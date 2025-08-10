// main.js - extracted from index.html

// Menu data
const menuData = {
  chicken: [
    {
      title: "دجاجة كاملة",
      desc: "دجاجة كاملة مع شلاضة والفريت و الصوصات",
      //   price: "35 ريال",
      img: "assets/whole chicken.jpg", // ضع رابط الصورة هنا
    },
    {
      title: "نصف دجاجة",
      desc: "نصف دجاجة مع شلاضة والفريت و الصوصات",
      //   price: "32 ريال",
      img: "assets/Half-Roast-Chicken.jpg",
    },
  ],
  sandwiches: [
    {
      title: "ساندويش دجاج",
      desc: "ساندويش دجاج مع فريت و كيتشوب",
      //   price: "18 ريال",
      img: "assets/sandwich-chicken.jpg",
    },
    {
      title: "ساندويش كفتة",
      desc: "ساندويش كفتة مع فريت و كيتشوب",
      //   price: "22 ريال",
      img: "assets/sandwich-meat.jpg",
    },
    {
      title: "ساندويش طون",
      desc: "ساندويش طون مع فريت و كيتشوب",
      //   price: "15 ريال",
      img: "assets/sandwich-thon.jpg",
    },
  ],
  tacos: [
    {
      title: "تاكوس دجاج",
      desc: "تاكوس دجاج مع فريت و صوص حار",
      //   price: "20 ريال",
      img: "assets/tacos-poulet.jpeg",
    },
    {
      title: "تاكوس لحم",
      desc: "تاكوس كفتة مع فريت و صوص",
      //   price: "24 ريال",
      img: "assets/tacos-viande-hache.jpg",
    },
    {
      title: "Mixte تاكوس",
      desc: "تاكوس مختلط مع فريت و صوص",
      //   price: "18 ريال",
      img: "assets/tacos-mixte.jpg",
    },
  ],
};

function showCategory(category) {
  const menuItems = document.getElementById("menu-items");
  menuItems.innerHTML = "";
  menuData[category].forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <div class="menu-item-img">
        <img src="${item.img}" alt="صورة ${item.title}" />
      </div>
      <h3 class="menu-item-title">${item.title}</h3>
      <p class="menu-item-desc">${item.desc}</p>
      <div class="menu-item-price">${item.price}</div>
    `;
    menuItems.appendChild(div);
  });
  // Update active tab
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const tabIndex = { chicken: 0, sandwiches: 1, tacos: 2 }[category];
  document.querySelectorAll(".tab-btn")[tabIndex].classList.add("active");
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Initial load
window.onload = function () {
  showCategory("chicken");
};
