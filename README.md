# Dersler

Next.js uygulamasında `/dersler`, `/kayit`, `/giris` ve `/profil` sayfaları bulunur.

## Çalıştırma

1. `.env.example` dosyasını `.env.local` adıyla kopyala.
2. Supabase proje adresini `NEXT_PUBLIC_SUPABASE_URL` değerine, publishable key'i `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` değerine yaz.
3. İlk kurulumda `supabase/schema.sql` ve `supabase/permissions.sql` dosyalarını Supabase SQL Editor'da birer kez çalıştır.
4. `supabase/kullanicilar.sql` ve `supabase/kullanicilar_izinleri.sql` dosyalarını Supabase SQL Editor'da birer kez çalıştır.
5. Supabase'te Authentication > Sign In / Providers > User Signups bölümünde Confirm email'i kapat ve Save changes'e bas.
6. Terminalde `npm install` ve `npm run dev` komutlarını çalıştır.
7. `http://localhost:3000/kayit` adresini aç.

`.env.local` Git'e gönderilmez. Secret key'i istemci tarafında kullanılan değişkenlere yazma.
