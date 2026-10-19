create table public.dersler (
  id bigint generated always as identity primary key,
  ad text not null
);

insert into public.dersler (ad) values
  ('Veritabanına giriş'),
  ('SQL temelleri'),
  ('Tablolar arası ilişkiler');
