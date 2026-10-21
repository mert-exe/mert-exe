import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function UstCubuk() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data) {
    return (
      <nav className="flex gap-4 border-b p-4">
        <Link href="/" className="font-bold">LMS</Link>
        <Link href="/dersler">Dersler</Link>
        <Link href="/giris" className="ml-auto">Giriş yap</Link>
        <Link href="/kayit">Kayıt ol</Link>
      </nav>
    );
  }

  const { data: kullanici } = await supabase
    .from("kullanicilar")
    .select("ad, rol")
    .eq("id", data.claims.sub)
    .maybeSingle();

  return (
    <nav className="flex gap-4 border-b p-4">
      <Link href="/" className="font-bold">LMS</Link>
      <Link href="/dersler">Dersler</Link>
      <Link href="/profil" className="ml-auto">
        {kullanici?.ad} ({kullanici?.rol === "ogretmen" ? "Öğretmen" : "Öğrenci"})
      </Link>
    </nav>
  );
}
