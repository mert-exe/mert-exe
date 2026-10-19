grant select on public.dersler to anon, authenticated;

create policy "Herkes dersleri okuyabilir"
on public.dersler
for select
to anon, authenticated
using (true);
