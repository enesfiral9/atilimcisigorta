class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6">
              <h5 class="mb-4 d-flex align-items-center text-white">
                <i class="bi bi-shield-check fs-3 me-2 text-primary"></i> Atılımcı Sigorta
              </h5>
              <p class="text-white-50" data-i18n="footer_about">Güvenilir ve köklü geçmişimizle size ve sevdiklerinize en uygun sigorta çözümlerini sunuyoruz. Geleceğinizi güvence altına alın.</p>
              <div class="mt-4">
                <a href="#" class="me-3 fs-5"><i class="bi bi-facebook"></i></a>
                <a href="#" class="me-3 fs-5"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="me-3 fs-5"><i class="bi bi-instagram"></i></a>
                <a href="#" class="fs-5"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <h5 data-i18n="footer_menu_title">Hızlı Menü</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#" data-i18n="nav_home">Anasayfa</a></li>
                <li class="mb-2"><a href="#kurumsal" data-i18n="nav_about">Hakkımızda</a></li>
                <li class="mb-2"><a href="#sigortalarimiz" data-i18n="nav_services">Hizmetlerimiz</a></li>
                <li class="mb-2"><a href="#blog" data-i18n="nav_blog">Blog</a></li>
                <li class="mb-2"><a href="#teklif-al" data-i18n="nav_offer">Teklif Al</a></li>
                <li class="mb-2"><a href="#iletisim" data-i18n="nav_contact">İletişim</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6">
              <h5 data-i18n="footer_contact_title">Bize Ulaşın</h5>
              <ul class="list-unstyled text-white-50">
                <li class="mb-3 d-flex">
                  <i class="bi bi-geo-alt me-3 mt-1 text-primary"></i>
                  <span>Kocaeli, Başiskele, Selahattin Eyyubi Cad., 8</span>
                </li>
                <li class="mb-3 d-flex">
                  <i class="bi bi-telephone me-3 mt-1 text-primary"></i>
                  <a href="tel:+902125554433">0 (212) 555 44 33</a>
                </li>
                <li class="mb-3 d-flex">
                  <i class="bi bi-envelope me-3 mt-1 text-primary"></i>
                  <a href="mailto:info@guvencsigorta.com.tr">info@guvencsigorta.com.tr</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6">
              <h5 data-i18n="footer_map_title">Konumumuz</h5>
              <div class="rounded overflow-hidden" style="height: 150px; background-color: #333;">
                <iframe src="https://maps.google.com/maps?q=Selahattin%20Eyyubi%20Cad.%208%20Ba%C5%9Fiskele%20Kocaeli&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p class="mb-0 text-white-50">&copy; ${new Date().getFullYear()} <span data-i18n="footer_copyright">Atılımcı Sigorta Acentesi. Tüm Hakları Saklıdır.</span></p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
