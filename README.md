# Dersler

Next.js uygulamasındaki `/dersler` sayfası, Supabase'teki `public.dersler` tablosunu okuyup ders adlarını listeler.

## Çalıştırma

1. `.env.example` dosyasını `.env.local` adıyla kopyala.
2. Supabase proje adresini `NEXT_PUBLIC_SUPABASE_URL` değerine, publishable key'i `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` değerine yaz.
3. Gerekirse `supabase/schema.sql` dosyasını Supabase SQL Editor'da bir kez çalıştır.
4. `supabase/permissions.sql` dosyasını Supabase SQL Editor'da bir kez çalıştır.
5. Terminalde `npm install` ve `npm run dev` komutlarını çalıştır.
6. `http://localhost:3000/dersler` adresini aç.

`.env.local` Git'e gönderilmez. Secret key'i istemci tarafında kullanılan değişkenlere yazma.
