import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  
  // dersler tablosundan verileri çekiyoruz
  const { data: dersler, error } = await supabase.from("dersler").select("*");

  if (error) {
    console.error("Dersler yüklenirken hata oluştu:", error.message);
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Ders Listesi</h1>
      <ul>
        {dersler?.map((ders) => (
          <li key={ders.id} style={{ margin: "10px 0" }}>
            {ders.ad}
          </li>
        ))}
      </ul>
    </main>
  );
}