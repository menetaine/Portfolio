(function () {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.9);
    display:none;
    align-items:center;
    justify-content:center;
    z-index:9999;
    cursor:pointer;
  `;

  const img = document.createElement("img");
  img.style.cssText = `
    max-width:90%;
    max-height:90%;
  `;

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  let images = [];
  let index = 0;

  function show(i) {
    index = i;
    img.src = images[index];
    overlay.style.display = "flex";
  }

  document.addEventListener("click", e => {
    const el = e.target.closest("[data-lightbox]");
    if (!el) return;

    e.preventDefault();
    images = el.dataset.lightbox.split(",");
    show(0);
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
})();
