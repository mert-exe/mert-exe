import Link from "next/link";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="WEB 203 ana sayfa">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>WEB <span className="brand-number">203</span></span>
        </Link>
        <Link className="header-link" href="/dersler">Dersler <span aria-hidden="true">↗</span></Link>
      </header>

      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Web geliştirme öğrenme alanı</p>
            <h1 className="home-title" id="home-title">Bilgiyi kullanışlı <span>ürünlere dönüştür.</span></h1>
            <p className="hero-description">
              WEB 203 derslerinde Next.js ile web uygulamaları geliştir,
              Supabase ile verilerini yönet ve öğrendiklerini adım adım uygula.
            </p>
            <Link className="primary-button" href="/dersler">
              Dersleri görüntüle <span aria-hidden="true">→</span>
            </Link>
          </div>

          <aside className="hero-side" aria-label="Öne çıkan ders">
            <span className="side-label">ÖNE ÇIKAN DERS</span>
            <span className="side-number" aria-hidden="true">02</span>
            <strong className="side-title">Supabase ile veritabanı</strong>
            <p className="side-description">Uygulamanı gerçek veriye bağla ve derslerini veritabanından oku.</p>
          </aside>
        </section>

        <section className="feature-row" aria-label="Öğrenme alanının özellikleri">
          <div className="feature-card"><strong>Uygulamalı dersler</strong><span>Her konu, çalışan bir proje üzerinden ilerler.</span></div>
          <div className="feature-card"><strong>Gerçek veriler</strong><span>Ders listesi Supabase veritabanından yüklenir.</span></div>
          <div className="feature-card"><strong>Adım adım ilerleme</strong><span>Kurulumdan yayımlamaya kadar tek bir akış.</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <span>WEB 203 · Web geliştirme</span>
        <Link className="footer-link" href="/dersler">Ders listesine git</Link>
      </footer>
    </div>
  );
}
