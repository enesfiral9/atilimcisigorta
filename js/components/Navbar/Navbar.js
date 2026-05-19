class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-shield-check text-primary-custom me-2" viewBox="0 0 16 16">
              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
              <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            Atılımcı Sigorta
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-i18n="nav_home">Anasayfa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#kurumsal" data-i18n="nav_about">Kurumsal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sigortalarimiz" data-i18n="nav_services">Sigortalarımız</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog" data-i18n="nav_blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#iletisim" data-i18n="nav_contact">İletişim</a>
              </li>
              <li class="nav-item ms-lg-2">
                <button class="btn btn-sm btn-outline-primary rounded-pill fw-bold" onclick="toggleLanguage()" style="padding: 4px 12px; margin-top: 5px;">
                  <i class="bi bi-globe me-1"></i><span class="lang-text">EN</span>
                </button>
              </li>
              <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a class="btn btn-cta px-4 py-2 rounded-pill" href="#teklif-al" data-i18n="nav_offer">Hemen Teklif Al</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Mobil menü açıkken dışarı tıklandığında menüyü kapat
    document.addEventListener('click', (event) => {
      const navbar = this.querySelector('.navbar');
      const navbarCollapse = this.querySelector('.navbar-collapse');
      const navbarToggler = this.querySelector('.navbar-toggler');
      
      if (navbarCollapse && navbarCollapse.classList.contains('show') && !navbar.contains(event.target)) {
        navbarToggler.click();
      }
    });

    // Menüdeki linklere tıklandığında menüyü kapat (daha iyi UX için)
    const navLinks = this.querySelectorAll('.nav-link, .btn-cta');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = this.querySelector('.navbar-collapse');
        const navbarToggler = this.querySelector('.navbar-toggler');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }
}

customElements.define('app-navbar', Navbar);
