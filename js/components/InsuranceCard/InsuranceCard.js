class InsuranceCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Sigorta Türü';
    const desc = this.getAttribute('desc') || 'Açıklama metni buraya gelecek.';
    const icon = this.getAttribute('icon') || 'shield-check';
    const img = this.getAttribute('img');
    const i18nTitle = this.getAttribute('i18n-title');
    const i18nDesc = this.getAttribute('i18n-desc');

    let imgHtml = '';
    if (img) {
      imgHtml = `<img src="${img}" class="card-img-top" alt="${title}" style="height: 220px; object-fit: cover;">`;
    }

    this.innerHTML = `
      <div class="card insurance-card h-100 border-0 overflow-hidden" style="border-radius: 16px;">
        ${imgHtml}
        <div class="card-body p-4 position-relative">
          <div class="position-absolute shadow-sm" style="top: -30px; right: 24px; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 10; background-color: var(--cta-color);">
            <i class="bi bi-${icon} fs-4 text-white"></i>
          </div>
          <h4 class="card-title mt-2 mb-3 fw-bold text-primary-custom" ${i18nTitle ? `data-i18n="${i18nTitle}"` : ''}>${title}</h4>
          <p class="card-text text-muted mb-4" ${i18nDesc ? `data-i18n="${i18nDesc}"` : ''}>${desc}</p>
          <a href="#teklif-al" class="text-primary-custom text-decoration-none fw-bold" style="transition: color 0.3s;">
            <span data-i18n="btn_read_more">Detaylı Bilgi</span> <i class="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('insurance-card', InsuranceCard);
