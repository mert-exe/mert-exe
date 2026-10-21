create table public.kullanicilar (
  id uuid primary key references auth.users (id) on delete cascade,
  ad text not null,
  rol text not null default 'ogrenci' check (rol in ('ogrenci', 'ogretmen'))
);

alter table public.kullanicilar enable row level security;

create function public.yeni_kullanici()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.kullanicilar (id, ad)
  values (new.id, new.raw_user_meta_data ->> 'ad');
  return new;
end;
$$;

create trigger kullanici_acildi
after insert on auth.users
for each row execute function public.yeni_kullanici();
