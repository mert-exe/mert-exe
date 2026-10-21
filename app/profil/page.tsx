import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CikisButonu from "@/components/CikisButonu";

async function ProfilBilgileri() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data) {
    redirect("/giris");
  }

  const { data: kullanici, error } = await supabase
    .from("kullanicilar")
    .select("ad, rol")
    .eq("id", data.claims.sub)
    .maybeSingle();

  if (error) {
    return <p className="mt-4 text-red-600">Hata: {error.message}</p>;
  }

  if (!kullanici) {
    return <p className="mt-4">Kullanıcı satırı bulunamadı.</p>;
  }

  return (
    <div className="mt-4 flex flex-col items-start gap-1">
      <p>Ad: {kullanici.ad}</p>
      <p>E-posta: {data.claims.email}</p>
      <p>Rol: {kullanici.rol === "ogretmen" ? "Öğretmen" : "Öğrenci"}</p>
      <CikisButonu />
    </div>
  );
}

export default function Profil() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Profil</h1>
      <Suspense fallback={<p className="mt-4">Yükleniyor...</p>}>
        <ProfilBilgileri />
      </Suspense>
    </main>
  );
}
