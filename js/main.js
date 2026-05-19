// Dil Yönetimi (i18n)
let currentLang = localStorage.getItem('siteLang') || 'tr';

window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('siteLang', lang);

  // Normal elementler
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update Navbar toggle text
  document.querySelectorAll('.lang-text').forEach(el => {
    el.innerText = lang === 'tr' ? 'EN' : 'TR';
  });
};

window.toggleLanguage = function() {
  const newLang = currentLang === 'tr' ? 'en' : 'tr';
  window.setLanguage(newLang);
};

$(document).ready(function () {
  console.log("Sigorta Acentesi Web Sitesi Yüklendi.");
  
  // İlk yüklemede dili uygula (bileşenlerin yüklenmesi için küçük bir gecikme)
  setTimeout(() => {
    window.setLanguage(currentLang);
  }, 100);

  // Offer Form AJAX Simulation
  $(document).on('submit', '#quickOfferForm', function (e) {
    e.preventDefault();

    const formData = {
      fullName: $('#fullName').val(),
      phone: $('#phone').val(),
      email: $('#email').val(),
      insuranceType: $('#insuranceType').val()
    };

    const $btn = $('#submitBtn');
    const originalText = $btn.html();

    // Disable button and show loading state
    $btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Gönderiliyor...');

    // Simulate AJAX Request
    setTimeout(() => {
      console.log('Mock Data Sent:', formData);

      // Show success alert
      $('#form-alert').removeClass('d-none alert-danger').addClass('alert-success show').text('Talebiniz başarıyla alınmıştır! Müşteri temsilcimiz en kısa sürede sizinle iletişime geçecektir.');

      // Reset form
      $('#quickOfferForm')[0].reset();

      // Restore button
      $btn.prop('disabled', false).html(originalText);

      // Hide alert after 5 seconds
      setTimeout(() => {
        $('#form-alert').addClass('d-none').removeClass('show');
      }, 5000);

    }, 1500);
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    
    // Update active class on click for nav links
    if ($(this).hasClass('nav-link')) {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    }

    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80 // Offset for fixed navbar
      }, 800);
      
      // Close mobile menu if open
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    }
  });

  // Scroll to Top Button Visibility
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#scrollToTopBtn').addClass('active');
    } else {
      $('#scrollToTopBtn').removeClass('active');
    }
  });

  // Welcome Modal Logic
  const hasSeenWelcome = localStorage.getItem('hasSeenWelcomeModal');
  if (!hasSeenWelcome) {
    setTimeout(() => {
      // Sadece ana sayfada göstermek için modalin varlığını kontrol et
      if ($('#welcomeModal').length) {
        const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        welcomeModal.show();
        localStorage.setItem('hasSeenWelcomeModal', 'true');
      }
    }, 5000); // 5 saniye
  }

  // Shatter Animation Logic on Close
  $('#welcomeModal').on('hide.bs.modal', function (e) {
    if (!$(this).hasClass('shattered')) {
      e.preventDefault(); // Stop default close immediately
      const $content = $(this).find('.modal-content');
      $content.addClass('shatter-animation'); // Trigger CSS animation
      
      // Wait for the slow shatter animation to complete before actually closing
      setTimeout(() => {
        $(this).addClass('shattered'); // Mark as completed
        $('#welcomeModal').modal('hide'); // Actually hide it
      }, 1200); // Wait 1.2 seconds
    }
  });
});
