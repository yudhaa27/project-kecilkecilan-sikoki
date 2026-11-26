# Panduan Kontribusi Tim (2 Orang)

Projek ini menggunakan alur **Feature Branch + Pull Request** agar kedua anggota bisa bekerja paralel tanpa saling menimpa kode.

## Pembagian Tugas

| Peran | Branch | File Fokus |
| --- | --- | --- |
| PIC Navbar | `feat/navbar` | `css/navbar.css`, `js/navbar.js`, bagian `<header>` di `index.html` |
| PIC Home | `feat/home` | `css/home.css`, bagian `<main>` di `index.html` |
| Maintainer | `main` | Review PR, cek konflik, dan merge ke `main` |

---

## Langkah Kerja Anggota

1. **Ambil update terbaru dari `main`:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Buat branch baru sesuai tugas:**
   ```bash
   # Untuk PIC Navbar:
   git checkout -b feat/navbar

   # Atau untuk PIC Home:
   git checkout -b feat/home
   ```

3. **Kerjakan perubahan & commit secara rapi:**
   ```bash
   git add .
   git commit -m "feat(navbar): tambah link dan responsive menu"
   ```

4. **Push branch ke GitHub & buat Pull Request (PR):**
   ```bash
   git push -u origin feat/navbar
   ```
   Buka repositori di GitHub lalu klik **Compare & pull request** ke branch `main`.

---

## Checklist Maintainer Sebelum Merge PR

- [ ] Perubahan hanya menyentuh file sesuai area tugasnya (minim konflik).
- [ ] Tampilan dicek di browser (desktop & mobile).
- [ ] Tidak ada error di console browser.
- [ ] PR di-approve dan di-merge ke `main`.
