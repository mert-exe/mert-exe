import { Suspense } from "react";
import Link from "next/link";
import { getSupabaseConfig } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

async function DersListesi() {
  if (!getSupabaseConfig()) {
    return (
      <div className="notice" role="status">
        <strong>Supabase bağlantısı henüz ayarlanmadı.</strong>
        <span>
          Proje kökündeki <code>.env.example</code> dosyasını <code>.env.local</code> olarak kopyala,
          Supabase proje adresini ve Publishable Key değerini ekle, sonra geliştirme sunucusunu yeniden başlat.
        </span>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: dersler, error } = await supabase
    .from("dersler")
    .select("id, ad")
    .order("id");

  if (error) {
    return (
      <div className="notice" role="alert">
        <strong>Dersler yüklenemedi.</strong>
        <span>Supabase bağlantısını, <code>dersler</code> tablosunu ve tablonun okuma izinlerini kontrol et.</span>
        <details>
          <summary>Teknik ayrıntı</summary>
          <pre>{error.message}</pre>
        </details>
      </div>
    );
  }

  if (!dersler?.length) {
    return <p className="empty-state">Henüz ders eklenmedi. Ders tablosuna ilk kaydı Supabase üzerinden ekleyebilirsin.</p>;
  }

  return (
    <ol className="lesson-list">
      {dersler.map((ders, index) => (
        <li className="lesson-card" key={ders.id}>
          <span className="lesson-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong className="lesson-name">{ders.ad}</strong>
            <span className="lesson-caption">WEB 203 · Uygulamalı ders</span>
          </span>
          <span className="lesson-arrow" aria-hidden="true">→</span>
        </li>
      ))}
    </ol>
  );
}

export default function Dersler() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="WEB 203 ana sayfa">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>WEB <span className="brand-number">203</span></span>
        </Link>
        <Link className="header-link" href="/">Ana sayfa</Link>
      </header>

      <main className="page-main">
        <section className="page-intro" aria-labelledby="courses-title">
          <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Öğrenme alanı</p>
          <h1 className="page-title" id="courses-title">Dersler</h1>
          <p className="page-description">Kurs içeriği Supabase veritabanından yüklenir. Yeni dersler eklendikçe bu liste kendiliğinden güncellenir.</p>
        </section>

        <section aria-labelledby="course-list-title">
          <div className="list-heading">
            <h2 id="course-list-title">Tüm dersler</h2>
            <span>Veritabanından güncel içerik</span>
          </div>
          <Suspense fallback={<p className="loading-state" role="status">Dersler yükleniyor…</p>}>
            <DersListesi />
          </Suspense>
        </section>
      </main>

      <footer className="site-footer">
        <span>WEB 203 · Web geliştirme</span>
        <Link className="footer-link" href="/">Ana sayfaya dön</Link>
      </footer>
    </div>
  );
}
