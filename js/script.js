// EREN.AI — küçük etkileşim betiği

/* ====== İLETİŞİM BİLGİLERİ: BURAYI KENDİNE GÖRE DEĞİŞTİR ====== */
const CONTACT = {
  email: "merhaba@eren.ai",
  whatsapp: "905000000000"   // başında + olmadan, ülke koduyla (örn. 905321234567). Boş bırakırsan WhatsApp butonları gizlenir.
};
/* =============================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü aç/kapa
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '68px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#0c0e0a';
      nav.style.borderBottom = '1px solid #2a2f22';
      nav.style.padding = '18px 28px';
      nav.style.gap = '16px';
    });
    // Mobilde bir bağlantıya tıklayınca menüyü kapat
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 880px)').matches) nav.style.display = 'none';
    }));
  }

  // Para birimi geçişi (TL / USD)
  document.querySelectorAll('.cur-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cur-toggle button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const key = btn.dataset.cur; // "try" veya "usd"
      document.querySelectorAll('[data-try]').forEach(el => { el.textContent = el.dataset[key]; });
    });
  });

  // Paket butonuna basınca formda ilgili hizmeti seç
  const planSelect = document.getElementById('f-plan');
  document.querySelectorAll('[data-plan]').forEach(a => {
    a.addEventListener('click', () => {
      if (planSelect) planSelect.selectedIndex = Number(a.dataset.plan);
    });
  });

  // İletişim bağlantıları
  const hasWa = /^\d{10,15}$/.test(CONTACT.whatsapp) && !/^9050000000/.test(CONTACT.whatsapp);
  const mailText = document.getElementById('mailText');
  const mailLink = document.getElementById('mailLink');
  const waLink = document.getElementById('waLink');
  const sendWa = document.getElementById('sendWa');
  const sendMail = document.getElementById('sendMail');
  if (mailText) mailText.textContent = CONTACT.email;
  if (mailLink) mailLink.href = 'mailto:' + CONTACT.email;
  if (hasWa) {
    if (waLink) { waLink.href = 'https://wa.me/' + CONTACT.whatsapp; waLink.hidden = false; }
    if (sendWa) sendWa.hidden = false;
  }

  // Teklif formu: mesajı WhatsApp'ta veya e-postada hazır aç
  function buildMessage() {
    const name = document.getElementById('f-name').value.trim();
    const biz = document.getElementById('f-biz').value.trim();
    const plan = document.getElementById('f-plan').value;
    const msg = document.getElementById('f-msg').value.trim();
    const hint = document.getElementById('formHint');
    if (!name || !msg) {
      hint.textContent = 'Lütfen adını ve proje açıklamasını doldur.';
      hint.classList.add('err');
      return null;
    }
    hint.classList.remove('err');
    return 'Merhaba, web sitenizden yazıyorum.\n\nAd: ' + name +
      (biz ? '\nİşletme: ' + biz : '') +
      '\nHizmet: ' + plan + '\n\n' + msg;
  }
  if (sendMail) sendMail.addEventListener('click', () => {
    const t = buildMessage(); if (!t) return;
    location.href = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Proje Talebi') + '&body=' + encodeURIComponent(t);
  });
  if (sendWa) sendWa.addEventListener('click', () => {
    const t = buildMessage(); if (!t) return;
    window.open('https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });

  /*
   * ============================================================
   * REKLAM ENTEGRASYONU (ör. Google AdSense)
   * ============================================================
   * Sitedeki her ".ad-slot" kutusu, gerçek bir reklam biriminin
   * yerini tutan bir yer tutucudur (id'leri: ad-slot-top,
   * ad-slot-inline, ad-slot-sidebar-top, ad-slot-sidebar-bottom,
   * ad-slot-footer).
   *
   * Google AdSense kullanacaksanız:
   * 1) <head> içine AdSense script etiketinizi ekleyin:
   *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   * 2) Her ".ad-slot" div'inin içeriğini kendi <ins class="adsbygoogle">
   *    kod parçanızla değiştirin ve aşağıdaki gibi başlatın:
   *    (adsbygoogle = window.adsbygoogle || []).push({});
   *
   * Kendi ürünlerinizi (Filementor Studio, onesaasaday vb.)
   * tanıtmak isterseniz, aynı kutuların içine kendi banner
   * görselinizi/linkinizi koyabilirsiniz — kod değişikliği
   * gerekmez, sadece HTML içeriğini değiştirin.
   */
});
