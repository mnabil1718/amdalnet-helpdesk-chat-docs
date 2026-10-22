---
title: Pengaturan Chat
deprecated: false
hidden: false
metadata:
  robots: index
---
## Pengaturan Chat

Klik tombol **Pengaturan** pada halaman daftar Chat Bantuan.

Pengaturan terdiri dari lima tab:

1. Template Chat.
2. SMTP.
3. Agen Chat.
4. Jam Operasional.
5. Hari Libur.

### 1. Template Chat

Admin dapat melihat, menambahkan, mengubah, dan menghapus template.

#### Menambahkan Template

1. Buka tab Template Chat.
2. Klik **Tambah Template**.
3. Isi judul, slot, dan isi balasan.
4. Klik **Simpan**.

Batas pada form frontend:

| Field | Ketentuan                      |
| ----- | ------------------------------ |
| Judul | Wajib, maksimal 100 karakter   |
| Slot  | Wajib, maksimal 20 karakter    |
| Isi   | Wajib, maksimal 1.000 karakter |

Slot menggunakan huruf kecil, angka, tanda hubung, atau underscore, dengan awal dan akhir berupa huruf/angka.

Rekomendasi slot:

- `salam-pembuka`
- `jawaban-cepat`
- `tindak-lanjut`
- `salam-penutup`
- `luar-jam-kerja`

Judul dan slot yang sudah digunakan dapat ditolak oleh sistem.

#### Mengubah atau Menghapus Template

1. Klik menu opsi pada kartu template.
2. Pilih **Edit** atau **Hapus**.
3. Simpan perubahan atau konfirmasi penghapusan.

Template pada ruang chat dimuat saat digunakan. Setelah perubahan pengaturan, muat ulang halaman ruang chat jika daftar template belum diperbarui.

### 2. SMTP

SMTP digunakan untuk mengirim email notifikasi chat.

Admin dapat:

- Melihat daftar akun SMTP.
- Menambahkan akun.
- Mengubah konfigurasi.
- Mengirim email pengujian.
- Mengganti akun default.
- Menghapus akun non-default.

#### Menambahkan atau Mengubah SMTP

Isi konfigurasi berikut:

- Nama akun.
- Nama pengirim.
- Alamat email pengirim.
- Host SMTP.
- Port.
- Enkripsi: tanpa enkripsi, TLS, atau SSL.
- Username.
- Password.

Saat mengubah akun, password dapat dikosongkan apabila tidak ingin mengganti password lama. Password tersimpan tidak ditampilkan kembali oleh API.

#### Mengirim Email Pengujian

1. Isi konfigurasi SMTP.
2. Isi alamat tujuan pada **Kirim Email Test**.
3. Klik **Kirim Test**.
4. Periksa Inbox atau SPAM pada alamat tujuan.

#### Mengganti SMTP Default

1. Buka menu opsi akun.
2. Pilih **Jadikan default**.
3. Konfirmasi perubahan.

Akun default digunakan sebagai pengirim notifikasi chat.

Akun default tidak dapat dihapus. Pindahkan default ke akun lain terlebih dahulu sebelum menghapusnya.

Jangan mencantumkan password SMTP pada dokumentasi, screenshot, atau pesan yang dibagikan.

### 3. Agen Chat

Admin dapat:

- Melihat nama dan email agen.
- Melihat status aktif/nonaktif.
- Melihat jumlah chat aktif.
- Memfilter status agen.
- Memuat ulang daftar agen.
- Menambahkan agen.
- Mengaktifkan atau menonaktifkan agen.
- Menghapus keanggotaan agen.

#### Menambahkan Agen

1. Klik **Tambah Agen**.
2. Cari pengguna berdasarkan nama atau email.
3. Pilih pengguna.
4. Klik **Simpan**.

Ketentuan:

- Kandidat harus memiliki role `helpdesk`.
- Pengguna yang sudah menjadi agen tidak dapat ditambahkan ulang.
- Penambahan agen tidak membuat akun pengguna baru.
- Penambahan agen tidak otomatis mengubah role pengguna.

Akun admin atau admin-child yang hanya memiliki role tersebut tidak otomatis menjadi kandidat agen.

#### Mengaktifkan atau Menonaktifkan Agen

Gunakan switch pada kolom Status.

Agen nonaktif tidak dapat dipilih sebagai tujuan penugasan baru.

#### Menghapus Agen

Klik **Hapus**, lalu ikuti konfirmasi.

Penghapusan ini menghapus keanggotaan agen, bukan akun pengguna.

Menonaktifkan atau menghapus agen tidak otomatis memindahkan seluruh chat lamanya. Tinjau dan atur ulang penugasan chat yang masih aktif jika diperlukan.

### 4. Jam Operasional

Admin dapat mengatur jadwal untuk Senin sampai Minggu.

Pada setiap hari:

1. Aktifkan atau nonaktifkan layanan.
2. Tentukan jam buka.
3. Tentukan jam tutup.
4. Klik **Simpan**.

Ketentuan:

- Jam tutup harus setelah jam buka.
- Hari nonaktif dianggap tutup.
- Zona waktu operasional adalah Asia/Jakarta atau WIB.
- Jadwal disimpan sebagai satu pengaturan tujuh hari.

Saat pengguna memulai chat di luar jam operasional, sistem dapat memberikan balasan otomatis.

Isi balasan menggunakan template slot `luar-jam-kerja`. Jika template tidak tersedia, sistem menggunakan pesan bawaan.

Pengaturan jam operasional bukan tombol untuk menonaktifkan seluruh fitur chat. Chat di luar jam layanan tetap dapat masuk.

### 5. Hari Libur

Admin dapat:

- Melihat daftar hari libur.
- Memfilter berdasarkan tahun dan bulan.
- Mencari berdasarkan keterangan.
- Menambahkan hari libur.
- Mengubah tanggal atau keterangan.
- Menghapus hari libur.

#### Menambahkan Hari Libur

1. Klik **Tambah Libur**.
2. Pilih tanggal.
3. Isi keterangan.
4. Klik **Simpan**.

Ketentuan:

- Tanggal wajib diisi dan tidak boleh duplikat.
- Keterangan wajib diisi, maksimal 255 karakter.
- Tanggal yang terdaftar sebagai hari libur dianggap di luar jam operasional, walaupun jadwal hari tersebut biasanya buka.

Hari libur diatur per tanggal, bukan otomatis berulang setiap tahun.

<br />
