# Dokumentasi Proyek Website Portofolio (Prototype)

Dokumentasi ini menjelaskan struktur file, HTML, CSS kustom, JavaScript, dan class Bootstrap 6.0.0-alpha.1 yang digunakan pada proyek **prototype_portofolio2**.

---

## 1. Struktur File Proyek

```
prototype_portofolio2/
├── index.html        # File HTML utama struktur website
├── css/
│   └── style.css     # File CSS kustom untuk warna aksen dan tema
├── js/
│   └── script.js     # File JavaScript untuk drawer navigasi dan validasi form
└── README.md         # Dokumentasi penjelas kode
```

---

## 2. Penjelasan File HTML (`index.html`)

### A. Bagian Head (`<head>`)
- `<!DOCTYPE html>`: Deklarasi tipe dokumen HTML5.
- `<html lang="id" data-bs-theme="dark">`: Elemen root dengan atribut tema gelap Bootstrap 6.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Memastikan tampilan responsif di layar perangkat seluler.
- `<link href="...bootstrap.min.css">`: Mengimpor Bootstrap 6.0.0-alpha.1 melalui CDN.
- `<link href="...bootstrap-icons.min.css">`: Mengimpor perpustakaan ikon Bootstrap Icons.
- `<link rel="stylesheet" href="css/style.css">`: Menghubungkan file CSS kustom buatan sendiri.

### B. Header dan Navigation Bar (`<header>`)
- `<nav class="navbar lg:navbar-expand border-bottom border-secondary py-3 sticky-top bg-body">`:
  - `navbar`: Menandai komponen navigasi Bootstrap.
  - `lg:navbar-expand`: Menggunakan sintaks prefiks Bootstrap 6 untuk mengatur navbar responsif.
  - `border-bottom border-secondary`: Memberikan garis pembatas bawah.
  - `py-3`: Memberikan padding vertikal (atas dan bawah) sebesar level 3.
  - `sticky-top`: Menjaga posisi navbar tetap menempel di bagian atas saat halaman di-scroll.
  - `bg-body`: Mengikuti warna latar belakang tema aktif (gelap/terang).
- `<a class="navbar-brand fw-bold fs-xl text-accent" href="#">Portofolio</a>`:
  - `navbar-brand`: Format teks untuk logo atau nama merek.
  - `fw-bold`: Menebalkan teks (`font-weight: 700`).
  - `fs-xl`: Mengatur ukuran teks memakai skala ukuran Bootstrap 6.
  - `text-accent`: Class kustom untuk warna biru muda.
- `<button class="navbar-toggler" data-bs-toggle="drawer" data-bs-target="#navbarNav">`:
  - Tombol ikon menu beraksen biru yang membuka drawer navigasi pada layar kecil.
- `<dialog class="lg:drawer drawer-end navbar-menu" id="navbarNav">`: Menampilkan panel menu drawer berwarna gelap pada layar kecil dan menu inline mulai breakpoint `lg`.
- `<ul class="navbar-nav ms-auto lg:align-items-center gap-2">`:
  - `navbar-nav`: List item khusus navigasi.
  - `ms-auto`: Dorong seluruh item navigasi ke sisi kanan (`margin-left: auto`).
  - `lg:align-items-center`: Merapikan posisi item di tengah pada breakpoint `lg`.
  - `gap-2`: Memberikan jarak 0.5rem antar item navigasi.
- `.navbar-menu .nav-link`: Memberi latar aksen saat link aktif, di-hover, atau mendapat fokus keyboard.
- Pada layar kecil, list, item, dan link menu memakai lebar penuh drawer supaya tepinya rata kiri-kanan.
- Tombol sertifikat tetap di sisi kanan navbar; label disembunyikan pada layar paling kecil agar tombol menu tetap punya ruang.

### C. Hero Section (`#home`)
- `<section id="home" class="py-5 lg:my-4">`: Kontainer section utama hero dengan padding vertikal (`py-5`).
- `<div class="container py-4">`: Kontainer dengan lebar teratur sesuai breakpoint layar.
- `<div class="row align-items-center gy-5">`:
  - `row`: Pembungkus kolom flexbox.
  - `align-items-center`: Meratakan elemen secara vertikal di tengah.
  - `gy-5`: Jarak vertikal antar kolom jika berderet ke bawah pada layar kecil.
- `<div class="lg:col-7 text-center lg:text-start">`:
  - `lg:col-7`: Mengambil 7 dari 12 kolom pada breakpoint `lg`.
  - `lg:text-start`: Mengubah teks dari rata tengah menjadi rata kiri mulai breakpoint `lg`.
- `<span class="badge bg-accent px-3 py-2 rounded-pill mb-3">`: Badge berbentuk kapsul dengan background warna aksen biru muda.
- `<h1 class="text-5xl fw-bold mb-3">`: Judul utama memakai skala teks Bootstrap 6.
- `<p class="text-lg fg-2 mb-4">`: Paragraf pembuka berukuran besar dengan warna teks sekunder.
- `<div class="d-flex flex-wrap justify-content-center lg:justify-content-start gap-3">`: Pengatur posisi tombol CTA menggunakan flexbox responsif.

### D. Project Cards Grid Section (`#projects`)
- `<section id="projects" class="py-5 bg-1">`: Section proyek dengan latar permukaan sekunder Bootstrap 6.
- `<div class="row g-4">`: Baris grid proyek dengan jarak antar kartu sebesar level 4 (`g-4`).
- `<div class="col-12 md:col-6 lg:col-4">`:
  - `col-12`: 1 Kolom penuh pada perangkat HP seluler (`<768px`).
  - `md:col-6`: 2 Kolom menyamping mulai breakpoint `md`.
  - `lg:col-4`: 3 Kolom menyamping mulai breakpoint `lg`.
- `<div class="card h-100 border border-secondary rounded-4 overflow-hidden shadow-sm">`:
  - `card`: Komponen kartu Bootstrap.
  - `h-100`: Menjadikan tinggi setiap kartu 100% sama dalam satu baris.
  - `shadow-sm`: Bayangan tipis pada kartu.
  - `overflow-hidden`: Memastikan isi tidak keluar dari sudut rounded kartu.
- `<img class="card-img-top ratio ratio-16x9 object-fit-cover">`: Gambar preview proyek dengan rasio 16:9 dan pemotongan gambar.
- `<div class="card-body d-flex flex-column p-4">`: Isi kartu dengan layout flexbox vertikal untuk menyeimbangkan posisi tombol di bawah.
- `<span class="badge badge-outline theme-accent">`: Badge outline bertema aksen.
- Tombol aksi menggunakan varian Bootstrap 6 seperti `btn-solid theme-accent` dan `btn-outline theme-accent`.

### E. Contact Form Section (`#contact`)
- `<div class="lg:col-8">`: Membatasi lebar form kontak agar nyaman dibaca pada breakpoint `lg`.
- `<form id="contactForm" data-bs-validate novalidate>`:
  - `data-bs-validate`: Mengaktifkan style validasi Bootstrap 6 setelah pengguna berinteraksi dengan field.
  - `novalidate`: Mematikan balon pesan validasi default bawaan browser agar menggunakan style Bootstrap.
- `<div id="contactAlert" class="alert theme-success d-none">`:
  - `alert theme-success`: Komponen pesan notifikasi dengan warna bertema sukses.
  - `d-none`: Menyembunyikan elemen (`display: none`) sampai form berhasil dikirim.
- `<input class="form-control form-control-lg bg-body fg-body" required>`:
  - `form-control form-control-lg`: Elemen input form Bootstrap ukuran besar.
  - `required`: Atribut wajib isi HTML5.
- `<div class="invalid-feedback">`: Pesan kesalahan yang akan muncul secara otomatis jika input belum diisi atau format salah.

### F. Certificate Dialog (`#certificateDialog`)
- `<dialog class="dialog dialog-lg" id="certificateDialog" tabindex="-1">`:
  - `dialog dialog-lg`: Dialog native berukuran besar yang dikelola Bootstrap 6.
  - `tabindex="-1"`: Mendukung navigasi aksesibilitas keyboard (tombol Escape).
- `.dialog-header`, `.dialog-body`, dan `.dialog-footer`: Bagian-bagian isi dialog.
- `data-bs-toggle="dialog"` dan `data-bs-dismiss="dialog"`: Membuka dan menutup dialog lewat Bootstrap JS.

---

## 3. Penjelasan File CSS (`css/style.css`)

```css
[data-bs-theme="dark"] {
  --bs-body-bg: #050505;
  --bs-body-color: #f8f9fa;
  --bs-accent-base: #38bdf8;
  --bs-accent-fg: #38bdf8;
  --bs-accent-fg-emphasis: #7dd3fc;
  --bs-accent-bg: #38bdf8;
  --bs-accent-bg-subtle: color-mix(in oklch, #38bdf8 15%, var(--bs-bg-body));
  --bs-accent-bg-muted: color-mix(in oklch, #38bdf8 25%, var(--bs-bg-body));
  --bs-accent-border: #38bdf8;
  --bs-accent-focus-ring: color-mix(in oklch, #38bdf8 75%, var(--bs-bg-body));
  --bs-accent-contrast: #050505;
}

.text-accent {
  color: #38bdf8 !important;
}

.bg-accent {
  background-color: #38bdf8 !important;
  color: #050505 !important;
}

.border-accent {
  border-color: #38bdf8 !important;
}

.placeholder-box {
  background-color: rgba(56, 189, 248, 0.08);
  border: 2px dashed #38bdf8;
}
```

---

## 4. Penjelasan File JavaScript (`js/script.js`)

- File dimuat sebagai ES module dan menggunakan `Drawer` dari bundle Bootstrap 6 untuk menutup drawer navigasi saat tautan dipilih.
- Handler form mencegah reload halaman dan memeriksa field wajib dengan `checkValidity()`.
- `data-bs-validate` mengaktifkan style validasi Bootstrap 6; script menampilkan alert sukses setelah form valid dan mengosongkan field.
