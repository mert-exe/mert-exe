"use client";

import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Kayit() {
  const router = useRouter();
  const [hata, setHata] = useState("");

  async function kayitOl(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: String(form.get("eposta")),
      password: String(form.get("sifre")),
      options: { data: { ad: String(form.get("ad")) } },
    });

    if (error) {
      setHata(error.message);
      return;
    }

    router.push("/profil");
    router.refresh();
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Kayıt ol</h1>
      <form onSubmit={kayitOl} className="mt-4 flex max-w-sm flex-col gap-3">
        <input name="ad" placeholder="Ad soyad" required className="rounded border p-2" />
        <input name="eposta" type="email" placeholder="E-posta" required className="rounded border p-2" />
        <input name="sifre" type="password" placeholder="Şifre" required className="rounded border p-2" />
        <button type="submit" className="rounded bg-foreground p-2 text-background">
          Kayıt ol
        </button>
      </form>
      {hata && <p className="mt-4 text-red-600">Hata: {hata}</p>}
    </main>
  );
}
