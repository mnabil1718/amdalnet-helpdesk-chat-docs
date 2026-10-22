---
title: Dokumentasi Pengguna Admin — Chat Bantuan AMDALNET
deprecated: false
hidden: false
metadata:
  robots: index
---
## 1. Tujuan

Dokumen ini menjelaskan fitur dan tindakan yang dapat dilakukan pengguna dengan role `admin` pada menu Chat Bantuan AMDALNET.

Menu ini digunakan untuk memantau percakapan masuk, membalas pertanyaan pengguna, mengatur penugasan agen, dan mengelola konfigurasi layanan chat.

## 2. Akses Menu

1. Login menggunakan akun dengan role `admin`.
2. Buka menu **Chat Bantuan**.
3. Sistem menampilkan daftar percakapan.

Alamat halaman pada lingkungan lokal:

`http://127.0.0.1:8000/#/live-chat`

Admin secara default dapat melihat semua percakapan, tidak hanya percakapan yang ditugaskan kepada dirinya.

> Dokumentasi ini berfokus pada role admin. Beberapa fitur juga tersedia untuk role lain sesuai pengaturan akses aplikasi.

## 3. Ringkasan Kemampuan Admin

| Area            | Kemampuan                                                                |
| --------------- | ------------------------------------------------------------------------ |
| Daftar chat     | Melihat, mencari, dan memfilter percakapan                               |
| Penugasan       | Menetapkan, mengganti, dan melepas agen penanggung jawab                 |
| Percakapan      | Membaca riwayat dan membalas pesan                                       |
| Lampiran        | Mengirim gambar, dokumen, arsip ZIP, dan video                           |
| Template        | Menggunakan serta mengelola template balasan                             |
| Penutupan       | Mengirim pesan terakhir dan mengakhiri chat                              |
| SMTP            | Mengelola akun email pengirim notifikasi                                 |
| Agen            | Menambahkan, mengaktifkan, menonaktifkan, dan menghapus keanggotaan agen |
| Jam operasional | Menentukan hari serta jam layanan                                        |
| Hari libur      | Mengelola tanggal libur layanan                                          |

## 4. Mengelola Daftar Percakapan

### 4.1. Melihat Daftar Chat

Tabel Chat Bantuan menampilkan:

- Nomor urut.
- ID atau kode chat.
- Tanggal mulai percakapan.
- Nama pengguna.
- Email pengguna.
- Nama instansi.
- Ringkasan pesan dan waktu pembaruan terakhir.
- Status percakapan.
- Agen penanggung jawab.
- Tombol untuk membuka percakapan.

Daftar percakapan diurutkan berdasarkan waktu mulai terbaru.

Admin dapat berpindah halaman dan mengubah jumlah data yang ditampilkan melalui pagination.

### 4.2. Mencari Percakapan

Gunakan kolom pencarian untuk mencari berdasarkan:

- Kode chat.
- Nama pengguna.
- Email.
- Nomor telepon.
- Nomor registrasi AMDALNET.
- Nama instansi.

Langkah penggunaan:

1. Masukkan kata kunci.
2. Tunggu hasil pencarian atau klik tombol pencarian.
3. Sistem menampilkan percakapan yang sesuai.

Pencarian daftar chat tidak mencari seluruh isi pesan percakapan.

### 4.3. Memfilter Status

Admin dapat memilih satu atau beberapa status:

| Status         | Arti                                                 |
| -------------- | ---------------------------------------------------- |
| Menunggu Admin | Percakapan sedang menunggu tanggapan admin           |
| Menunggu User  | Admin sudah membalas dan menunggu tanggapan pengguna |
| Selesai        | Percakapan sudah diakhiri                            |

Status **Menunggu Admin** tidak sama dengan penanda belum dibaca. Membuka percakapan tidak otomatis mengubahnya menjadi **Menunggu User**.

### 4.4. Memfilter Agen

Admin dapat:

- Memilih satu atau beberapa agen.
- Mencari opsi agen berdasarkan nama atau email.
- Memilih **Belum ditugaskan**.
- Menggabungkan pilihan agen dengan percakapan yang belum ditugaskan.

Filter agen dapat menampilkan agen nonaktif untuk membantu penelusuran percakapan lama.

### 4.5. Memfilter Tanggal

1. Pilih tanggal awal.
2. Pilih tanggal akhir.
3. Sistem menyaring berdasarkan tanggal mulai percakapan.

Tanggal akhir tidak boleh lebih awal daripada tanggal awal.

### 4.6. Mereset Filter

Klik **Reset** untuk mengosongkan pencarian, status, rentang tanggal, dan filter agen.

Pada akun admin, reset mengembalikan daftar ke cakupan semua agen.

## 5. Mengatur Penugasan Agen

Penugasan dilakukan melalui dropdown pada kolom **Penugasan**.

### 5.1. Menetapkan atau Mengganti Agen

1. Cari percakapan yang ingin ditugaskan.
2. Klik dropdown pada kolom Penugasan.
3. Cari agen berdasarkan nama atau email.
4. Pilih agen.
5. Sistem menyimpan perubahan.

Nama agen ditampilkan sebagai nilai terpilih. Email ditampilkan pada daftar opsi untuk membantu membedakan pengguna dengan nama serupa.

### 5.2. Melepas Penugasan

1. Buka dropdown Penugasan.
2. Kosongkan pilihan menggunakan tombol clear.
3. Sistem mengembalikan percakapan menjadi belum ditugaskan.

### 5.3. Aturan Penugasan

- Penugasan baru hanya dapat diberikan kepada agen aktif.
- Penugasan chat berstatus Selesai tidak dapat diubah.
- Selama perubahan sedang disimpan, kontrol penugasan dinonaktifkan.
- Penugasan tidak memindahkan atau menghapus riwayat percakapan.

Sistem juga memiliki penugasan otomatis untuk chat yang belum memiliki agen. Pemilihan dilakukan secara bergilir berdasarkan waktu penugasan terakhir, bukan berdasarkan jumlah chat paling sedikit.

Jika tidak ada agen aktif, percakapan dapat tetap belum ditugaskan.

## 6. Membuka dan Membalas Percakapan

### 6.1. Membuka Chat

Pada kolom Aksi:

- Klik **Masuk Chat** untuk percakapan yang belum selesai.
- Klik **Lihat Chat** untuk percakapan yang sudah selesai.

Percakapan dibuka pada tab atau jendela browser terpisah, bergantung pada pengaturan browser. Membuka kode chat yang sama kembali akan menggunakan tab bernama sama apabila masih tersedia.

### 6.2. Informasi pada Ruang Chat

Admin dapat melihat:

- Nama pengguna.
- Kode chat.
- Email dan nomor telepon.
- Status percakapan.
- Riwayat pesan dan lampiran.
- Waktu pesan serta pengelompokan berdasarkan tanggal.
- Informasi waktu penutupan jika chat sudah selesai.

Klik ikon salin di samping kode chat untuk menyalin kode tersebut.

### 6.3. Memuat Pesan Terbaru

Klik tombol **Muat ulang chat** di kanan atas.

Pada implementasi saat ini, admin perlu menggunakan tombol tersebut untuk melihat pesan masuk terbaru. Jangan mengasumsikan pesan pengguna selalu muncul otomatis secara realtime.

### 6.4. Mengirim Pesan

1. Ketik balasan pada kolom pesan.
2. Klik tombol kirim.
3. Sistem menyimpan balasan dan memperbarui percakapan.

Pada perangkat desktop:

- Enter digunakan untuk mengirim.
- Shift + Enter digunakan untuk membuat baris baru.

Pada perangkat sentuh, Enter digunakan untuk membuat baris baru; gunakan tombol kirim.

Kolom pesan pada frontend saat ini dibatasi maksimal **1.000 karakter**.

Setelah admin membalas, status percakapan menjadi **Menunggu User**.

Sistem menjalankan pengiriman email notifikasi kepada pengguna. Penerimaan email bergantung pada konfigurasi SMTP dan layanan email penerima.

### 6.5. Menggunakan Emoji

1. Klik ikon Emoji.
2. Pilih emoji.
3. Emoji disisipkan pada posisi kursor atau menggantikan teks yang dipilih.
4. Kirim pesan seperti biasa.

### 6.6. Membuka Tautan

Tautan yang dikenali pada pesan ditampilkan sebagai link yang dapat diklik.

- Tautan ke domain pemerintah `.go.id` dibuka langsung.
- Tautan ke domain lain menampilkan konfirmasi sebelum dibuka.

Admin tetap perlu memeriksa tujuan tautan dan mengenali pengirimnya.

## 7. Mengirim dan Mengakses Lampiran

### 7.1. Format dan Batas Lampiran

| Jenis   | Format         | Batas ukuran per file |
| ------- | -------------- | --------------------- |
| Gambar  | JPG, JPEG, PNG | 10 MB                 |
| Dokumen | PDF, DOCX      | 10 MB                 |
| Arsip   | ZIP            | 10 MB                 |
| Video   | MP4, MOV, WEBM | 50 MB                 |

Maksimal **5 file** dapat dipilih dalam satu batch pengiriman pada frontend.

Server tetap memvalidasi format, ukuran, dan kesesuaian isi file. Mengganti ekstensi nama file tidak menjamin file dapat diterima.

### 7.2. Menambahkan Lampiran

Admin dapat menggunakan:

- Tombol Lampiran, kemudian memilih Gambar, Video, atau Dokumen.
- Drag and drop file ke area percakapan.

Setelah dipilih, sistem menampilkan panel lampiran.

### 7.3. Meninjau Lampiran Sebelum Dikirim

Pada panel lampiran, admin dapat:

- Melihat preview gambar.
- Melihat nama dan ukuran dokumen atau video.
- Berpindah antarfile melalui thumbnail.
- Menambahkan keterangan pada masing-masing file.
- Menambahkan file sampai batas maksimum.
- Menghapus file melalui tombol silang.
- Membatalkan seluruh pilihan lampiran.
- Mengirim lampiran tanpa teks apabila diperlukan.

Preview dokumen dan video pada panel ini berupa informasi file, bukan pembaca dokumen atau pemutar video.

### 7.4. Memantau Pengiriman

Saat mengunggah lampiran, sistem menampilkan:

- Status menunggu.
- Persentase upload.
- Status pemrosesan.
- Pesan kegagalan jika terjadi kesalahan.

Admin dapat membatalkan upload yang masih dapat dibatalkan dan mengirim ulang file yang gagal.

Pembatalan upload bukan tindakan untuk menghapus lampiran yang sudah berhasil tersimpan.

### 7.5. Mengakses Lampiran yang Sudah Terkirim

Pada lampiran di riwayat chat, admin dapat:

- Membuka gambar di tab baru.
- Mengunduh file.
- Memilih menu **Unduh**.
- Memilih menu **Salin link**.

Tautan lampiran dapat dibagikan. Perlakukan tautan tersebut sebagai informasi sensitif dan jangan membagikannya kepada pihak yang tidak berwenang.

## 8. Menggunakan Template Balasan

### 8.1. Memilih Template dari Menu

1. Klik tombol Menu di dekat kolom pesan.
2. Pilih template balasan.
3. Tinjau dan sesuaikan isinya.
4. Kirim pesan.

Template membantu pengisian pesan; pemilihannya tidak langsung mengirim pesan.

### 8.2. Mencari Template dengan Perintah Slash

1. Ketik `/` pada awal pesan atau setelah spasi.
2. Lanjutkan dengan kata dari judul template.
3. Pilih salah satu hasil.

Navigasi hasil dapat dilakukan menggunakan:

- Panah atas dan bawah untuk memilih.
- Enter atau Tab untuk memasukkan template.
- Escape untuk menutup daftar.

### 8.3. Mereset Pesan Template

Gunakan **Reset Pesan** pada menu untuk mengosongkan pesan yang terisi dari template.

### 8.4. Template Salam Penutup

Template dengan slot `salam-penutup` memiliki perilaku khusus:

- Mengisi pesan penutup.
- Mengaktifkan mode akhiri chat.
- Memerlukan konfirmasi ketika pesan dikirim.

Periksa mode pengiriman sebelum menekan tombol kirim.

## 9. Mengakhiri Percakapan

1. Buka menu pada kolom pesan.
2. Pilih **Akhiri chat**.
3. Tinjau template penutup jika tersedia, atau tulis pesan terakhir.
4. Klik kirim.
5. Setujui konfirmasi **Kirim & Akhiri**.

Admin dapat membatalkan mode penutupan melalui **Batal akhiri chat** sebelum mengirim.

Setelah penutupan berhasil:

- Status berubah menjadi **Selesai**.
- Riwayat tetap dapat dibaca.
- Pengiriman pesan baru dinonaktifkan.
- Penugasan tidak dapat diubah.
- Sistem menjalankan pengiriman email penutupan kepada pengguna.

Jika ada lampiran yang gagal terkirim, chat belum diakhiri.

Jika pesan sudah terkirim tetapi penutupan gagal, sistem menampilkan pemberitahuan dan chat dapat tetap terbuka.

> Tidak tersedia fitur membuka kembali chat yang sudah selesai pada implementasi ini.

## 10. Pengaturan Chat

Klik tombol **Pengaturan** pada halaman daftar Chat Bantuan.

Pengaturan terdiri dari lima tab:

1. Template Chat.
2. SMTP.
3. Agen Chat.
4. Jam Operasional.
5. Hari Libur.

### 10.1. Template Chat

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

### 10.2. SMTP

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

### 10.3. Agen Chat

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

### 10.4. Jam Operasional

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

### 10.5. Hari Libur

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

## 11. Alur Kerja Admin yang Disarankan

1. Buka daftar Chat Bantuan.
2. Filter status Menunggu Admin.
3. Periksa penugasan dan tentukan agen bila diperlukan.
4. Buka percakapan dan baca riwayatnya.
5. Gunakan template atau tulis balasan.
6. Tambahkan lampiran jika dibutuhkan.
7. Kirim balasan.
8. Gunakan tombol muat ulang untuk memeriksa tanggapan terbaru.
9. Setelah pertanyaan selesai, kirim pesan penutup dan akhiri chat.

## 12. Batasan Fitur Saat Ini

- Tidak tersedia fitur menghapus percakapan dari daftar melalui antarmuka admin.
- Tidak tersedia fitur membuka kembali chat yang selesai.
- Tidak tersedia fitur ekspor daftar atau riwayat chat pada antarmuka yang ditinjau.
- Perubahan penugasan dilakukan per percakapan, bukan secara massal.
- Pesan terbaru pada ruang chat dimuat melalui tombol muat ulang.
- Tombol aktif/nonaktif seluruh layanan chat belum ditampilkan dan endpoint status/toggle belum tersedia pada route yang ditinjau.
- Endpoint jumlah chat belum dibaca tersedia, tetapi keberadaan endpoint tersebut tidak otomatis berarti badge sudah terpasang pada tampilan.
- Konfigurasi backend saat ini menerima pesan sampai 2.000 karakter, tetapi form frontend membatasi 1.000 karakter. Panduan penggunaan mengikuti batas frontend.

## 13. Referensi Endpoint Admin

Seluruh endpoint berikut menggunakan prefix:

`/api/v2/helpdesk/admin`

Akses memerlukan autentikasi dan role yang diizinkan. Perubahan penugasan dibatasi untuk role pengelola chat, yaitu admin dan admin-child pada konfigurasi saat ini.

### Percakapan

| Method | Path                         | Fungsi                                       |
| ------ | ---------------------------- | -------------------------------------------- |
| GET    | `/chats`                     | Daftar dan filter percakapan                 |
| GET    | `/chats/unread-count`        | Jumlah chat belum dibaca                     |
| GET    | `/chats/{chatCode}`          | Detail dan riwayat; mencatat pembacaan admin |
| POST   | `/chats/{chatCode}/messages` | Mengirim balasan                             |
| POST   | `/chats/{chatCode}/close`    | Mengakhiri chat                              |
| PUT    | `/chats/{chatCode}/assignee` | Mengubah atau melepas penugasan              |

### Agen

| Method | Path                      | Fungsi                     |
| ------ | ------------------------- | -------------------------- |
| GET    | `/chat-agents`            | Daftar agen                |
| GET    | `/chat-agents/candidates` | Pencarian kandidat         |
| POST   | `/chat-agents`            | Menambahkan agen           |
| PATCH  | `/chat-agents/{id}`       | Mengubah status aktif      |
| DELETE | `/chat-agents/{id}`       | Menghapus keanggotaan agen |

### Template

| Method | Path                   | Fungsi               |
| ------ | ---------------------- | -------------------- |
| GET    | `/chat-templates`      | Daftar template      |
| POST   | `/chat-templates`      | Menambahkan template |
| PUT    | `/chat-templates/{id}` | Mengubah template    |
| DELETE | `/chat-templates/{id}` | Menghapus template   |

### SMTP

| Method | Path                          | Fungsi                     |
| ------ | ----------------------------- | -------------------------- |
| GET    | `/mail-accounts`              | Daftar akun SMTP           |
| POST   | `/mail-accounts`              | Menambahkan akun           |
| PUT    | `/mail-accounts/{id}`         | Mengubah akun              |
| DELETE | `/mail-accounts/{id}`         | Menghapus akun non-default |
| POST   | `/mail-accounts/{id}/default` | Menetapkan akun default    |
| POST   | `/mail-accounts/test`         | Mengirim email pengujian   |

### Jadwal Layanan

| Method | Path             | Fungsi                 |
| ------ | ---------------- | ---------------------- |
| GET    | `/office-hours`  | Melihat jadwal         |
| PUT    | `/office-hours`  | Memperbarui jadwal     |
| GET    | `/holidays`      | Daftar hari libur      |
| POST   | `/holidays`      | Menambahkan hari libur |
| PUT    | `/holidays/{id}` | Mengubah hari libur    |
| DELETE | `/holidays/{id}` | Menghapus hari libur   |

## 14. Dasar Dokumentasi

Dokumentasi disusun melalui peninjauan:

- Route API modul Helpdesk.
- Konfigurasi akses, lampiran, dan jam operasional.
- Controller, Request, Use Case, dan Repository.
- Halaman daftar serta ruang Chat Bantuan.
- Komponen pengaturan, template, pesan, dan lampiran.

Dokumen menjelaskan kemampuan yang terlihat pada implementasi kode. Pengujian langsung menggunakan akun admin tetap diperlukan untuk memastikan konfigurasi dan layanan pendukung pada lingkungan tujuan.