create table if not exists public.dersler (
  id bigint generated always as identity primary key,
  ad text not null
);

alter table public.dersler enable row level security;

grant select on public.dersler to anon, authenticated;

drop policy if exists "Herkes dersleri okuyabilir" on public.dersler;

create policy "Herkes dersleri okuyabilir"
on public.dersler
for select
to anon, authenticated
using (true);

insert into public.dersler (ad)
select seed.ad
from (
  values
    ('Veritabanına giriş'),
    ('SQL temelleri'),
    ('Tablolar arası ilişkiler')
) as seed(ad)
where not exists (
  select 1
  from public.dersler existing
  where existing.ad = seed.ad
);
