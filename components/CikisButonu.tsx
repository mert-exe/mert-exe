"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function CikisButonu() {
  const router = useRouter();

  async function cikisYap() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/giris");
    router.refresh();
  }

  return (
    <button onClick={cikisYap} className="mt-4 rounded border p-2">
      Çıkış yap
    </button>
  );
}
