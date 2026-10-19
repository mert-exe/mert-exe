# WEB 203 · Dersler

WEB 203, Next.js App Router ve Supabase kullanan küçük bir öğrenme uygulamasıdır. Ana sayfadan ders listesine geçilir; `/dersler` sayfası `public.dersler` tablosundaki kayıtları sunucuda okuyup gösterir.

## Başlangıç

1. `.env.example` dosyasını `.env.local` adıyla kopyala.
2. Supabase projenin adresini `NEXT_PUBLIC_SUPABASE_URL` değerine, Publishable Key değerini `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` değerine yaz.
3. Supabase SQL Editor'da `supabase/schema.sql` dosyasının içeriğini çalıştır. Bu işlem `dersler` tablosunu, herkese açık okuma iznini ve örnek ders kayıtlarını hazırlar.
4. Bağımlılıkları kurup uygulamayı başlat:

   ```bash
   npm install
   npm run dev
   ```

5. `http://localhost:3000` adresini aç. Ders listesi `http://localhost:3000/dersler` adresindedir.

Üretim derlemesi için `npm run build`, derlemeyi yerel olarak sunmak için `npm run start` komutlarını kullan.

## Proje yapısı

- `app/page.tsx`: ana sayfa
- `app/dersler/page.tsx`: Supabase'ten dersleri okuyan sayfa
- `lib/supabase/server.ts`: Next.js sunucusu için çerez uyumlu Supabase istemcisi
- `lib/supabase/client.ts`: tarayıcı bileşenleri için Supabase istemcisi
- `supabase/schema.sql`: tablo, RLS izni, okuma kuralı ve örnek veriler

## Yayımlama

Vercel projesinin Environment Variables ayarlarına `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` değerlerini ekle. Sonra yeni bir deployment başlat. Publishable Key tarayıcıda kullanılmak üzere tasarlanmıştır; `sb_secret_` ile başlayan Secret Key'i bu projeye ekleme.

`.env.local` Git'e eklenmez. Gerçek proje adresini ve anahtarını `.env.example` dosyasına yazma.
