// EREN.AI — küçük etkileşim betiği

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
  }

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
