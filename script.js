const navbar = document.getElementById("navbar");
const showcaseGrid = document.getElementById("showcaseGrid");
const detailContent = document.getElementById("detailContent");

/* Header navigation */
if (navbar) {
  showcaseData.forEach(item => {
    const navLink = document.createElement("a");
    navLink.href = `detail.html?id=${item.id}`;
    navLink.textContent = item.navTitle;
    navbar.appendChild(navLink);
  });
}

/* Homepage cards */
if (showcaseGrid) {
  showcaseData.forEach(item => {
    const card = document.createElement("a");
    card.className = "showcase-card";
    card.href = `detail.html?id=${item.id}`;

    card.innerHTML = `
      <div class="card-image">
        <img src="${item.image}" alt="${item.cardTitle}">
      </div>

      <div class="card-content">
        <h3>${item.cardTitle}</h3>
        <h4>${item.subtitle}</h4>
        <p>${item.description}</p>
      </div>
    `;

    showcaseGrid.appendChild(card);
  });
}

/* Detail page */
/* Detail page */
if (detailContent) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = showcaseData.find(project => project.id === id);

  if (item) {
    detailContent.innerHTML = `
      <section class="detail-page-title">
        <h1>${item.cardTitle}</h1>
        <p>${item.description}</p>
      </section>

      <div class="detail-grid">
  ${item.sections.map(section => `
    <section class="detail-vertical-card">

      <div class="detail-top-image">
        <img src="${section.image}" alt="${section.title}">
      </div>

      <div class="detail-bottom-text">
        <h2>${section.title}</h2>
        <h3>${section.subtitle}</h3>
        <p>${section.text}</p>
      </div>

    </section>
  `).join("")}
</div>

  
    `;
  }
}