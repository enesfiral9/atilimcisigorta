class OfferForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="offer-form-wrapper">
        <!-- Watermark Icon -->
        <i class="bi bi-shield-check position-absolute text-primary" style="font-size: 22rem; opacity: 0.10; bottom: -80px; right: -50px; z-index: 0; transform: rotate(-15deg);"></i>
        
        <div class="position-relative" style="z-index: 1;">
          <h3 class="mb-4 text-center fw-bold text-primary-custom" data-i18n="offer_title">Hızlı Teklif Alın</h3>
          <p class="text-muted text-center mb-4" data-i18n="offer_desc">Size en uygun teklifi hazırlayabilmemiz için lütfen bilgilerinizi doldurun.</p>
        
        <div id="form-alert" class="alert alert-success d-none" role="alert" data-i18n="alert_success">
          Talebiniz başarıyla alınmıştır! Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.
        </div>

        <form id="quickOfferForm">
          <div class="mb-3">
            <label for="fullName" class="form-label fw-semibold" data-i18n="offer_label_name">Ad Soyad</label>
            <input type="text" class="form-control form-control-lg" id="fullName" placeholder="Adınız Soyadınız" data-i18n="offer_placeholder_name" required>
          </div>
          
          <div class="mb-3">
            <label for="phone" class="form-label fw-semibold" data-i18n="offer_label_phone">Telefon Numarası</label>
            <input type="tel" class="form-control form-control-lg" id="phone" placeholder="0(5XX) XXX XX XX" required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label fw-semibold" data-i18n="offer_label_email">E-posta Adresi</label>
            <input type="email" class="form-control form-control-lg" id="email" placeholder="ornek@email.com" required>
          </div>

          <div class="mb-4">
            <label for="insuranceType" class="form-label fw-semibold" data-i18n="offer_label_type">Sigorta Türü</label>
            <select class="form-select form-select-lg" id="insuranceType" required>
              <option value="" selected disabled data-i18n="offer_select_default">Seçiniz...</option>
              <option value="kasko" data-i18n="srv_kasko_title">Kasko Sigortası</option>
              <option value="trafik" data-i18n="srv_trafik_title">Trafik Sigortası</option>
              <option value="saglik" data-i18n="srv_saglik_title">Tamamlayıcı Sağlık Sigortası</option>
              <option value="dask" data-i18n="srv_dask_title">DASK (Zorunlu Deprem Sigortası)</option>
              <option value="konut" data-i18n="srv_konut_title">Konut Sigortası</option>
              <option value="isyeri" data-i18n="srv_isyeri_title">İşyeri Sigortası</option>
            </select>
          </div>

          <button type="submit" class="btn btn-cta btn-lg w-100 rounded-pill" id="submitBtn">
            <span data-i18n="offer_btn">Teklif İste</span> <i class="bi bi-send ms-2"></i>
          </button>
        </form>
        </div>
      </div>
    `;
  }
}

customElements.define('offer-form', OfferForm);
