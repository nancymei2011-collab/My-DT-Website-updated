const navbar = document.getElementById("navbar");
const showcaseGrid = document.getElementById("showcaseGrid");
const detailContent = document.getElementById("detailContent");
const siteVersion = "20260924-1";

/* Header navigation */
if (navbar) {
  showcaseData.forEach(item => {
    const navLink = document.createElement("a");
    navLink.href = `detail.html?id=${item.id}&v=${siteVersion}`;
    navLink.textContent = item.navTitle;
    navbar.appendChild(navLink);
  });
}

/* Homepage cards */
if (showcaseGrid) {
  showcaseData.forEach(item => {
    const card = document.createElement("a");
    card.className = `showcase-card project-${item.id}`;
    card.href = `detail.html?id=${item.id}&v=${siteVersion}`;

    card.innerHTML = `
      <div class="card-image">
        ${item.icon ? `
          <span class="card-icon" role="img" aria-label="${item.cardTitle}">${item.icon}</span>
        ` : `
          <img src="${item.image}" alt="${item.cardTitle}">
        `}
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

      <div class="detail-grid project-${item.id}">
  ${item.sections.map(section => `
    <section class="detail-vertical-card">

      <div class="detail-top-image">
        ${section.notice ? `
          <div class="project-notice">
            <span class="project-notice-icon" aria-hidden="true">🎮</span>
            <p>${section.notice}</p>
          </div>
        ` : section.embedUrl ? `
          <iframe
            src="${section.embedUrl}"
            title="${section.title} on itch.io"
            loading="lazy"
            allowfullscreen>
            <a href="${section.projectUrl}">${section.title} by nancymei2011-collab</a>
          </iframe>
        ` : section.video ? `
          <video controls>
            <source src="${section.video}" type="video/mp4">
          </video>
        ` : `
          <img src="${section.image}" alt="${section.title}">
        `}
      </div>

      <div class="detail-bottom-text">
        <h2>${section.title}</h2>
        <h3>${section.subtitle}</h3>
        <p>${section.text}</p>
        ${section.projectUrl ? `
          <a class="project-link" href="${section.projectUrl}" target="_blank" rel="noopener noreferrer">
            Play ${section.title} on itch.io
          </a>
        ` : ""}
      </div>

    </section>
  `).join("")}
</div>

  
    `;
  }
}
