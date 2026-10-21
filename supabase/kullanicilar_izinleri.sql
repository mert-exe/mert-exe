grant select on public.kullanicilar to authenticated;

create policy "Kullanıcı kendi satırını okur"
on public.kullanicilar
for select
to authenticated
using ((select auth.uid()) = id);
