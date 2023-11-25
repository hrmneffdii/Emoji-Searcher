### Emoji Searcher

#### Deskripsi

Projek ini merupakan projek sederhana yang dibuat menggunakan React JS. Proyek ini menggunakan implementasi dari konsep dasar dari prosedur React JS seperti penggunaan React Hook seperti useState dan useEffect, implementasi dari cara kerja komponen, dan juga menerapkan penggunaan API sederhana. Berikut merupakan video simulasi dari projek : 

[Screencast from 25-11-23 12:26:45.webm](https://github.com/hrmneffdii/Emoji-Searcher/assets/149390129/4be7bc8a-644e-4258-9797-1bbdc1fb501b)


#### Detail

Untuk melihat lebih lanjut, berikut merupakan detail-detail dari komponen yang ada : 

1. Nabvar <br>
  Komponen Navbar digunakan untuk menampilkan elemen navigasi utama aplikasi. Elemen-elemen tersebut melibatkan ikon emoji yang memberikan sentuhan visual, ikon pencarian untuk memfasilitasi pencarian emoji, dan judul aplikasi yang memberikan identitas aplikasi sebagai "Emoji searcher". Setiap elemen ini memiliki peran khusus dalam memberikan pengalaman pengguna yang optimal.

2. Container<br>
   Komponen Container berfungsi sebagai wadah utama untuk konten-konten aplikasi. Properti 'children' memungkinkan pengguna menempatkan konten di dalamnya. Type checking menggunakan PropTypes untuk memastikan properti 'children' sesuai. 
   
3. Input<br>
   Komponen Input digunakan untuk membuat input teks dengan gaya tertentu. Properti 'onChange' memungkinkan penanganan perubahan teks oleh pengguna. Type checking menggunakan PropTypes untuk memastikan properti 'onChange' sesuai.
   
4. Emojis<br>
   Komponen Emojis menampilkan daftar emoji berdasarkan data yang diterima dan teks pencarian. Jika hasil pencarian ditemukan, EmojiBox ditampilkan untuk setiap emoji yang cocok. Jika tidak ada hasil, pesan kosong ditampilkan. Properti yang diterima (emojiData dan searchText) menggunakan PropTypes untuk type checking.
   
5. EmojiBox<br>
   Komponen EmojiBox menampilkan kotak berisi emoji dan judulnya. Saat kotak diklik, emoji akan disalin ke clipboard dan kotak akan ditandai sebagai terpilih dengan animasi singkat. Properti yang diterima (title, symbol, dan index) menggunakan PropTypes untuk type checking
   
6. Empty<br>
  omponen Empty digunakan untuk menampilkan pesan atau elemen visual yang menunjukkan bahwa tidak ada data yang tersedia. Properti yang diterima (text) menggunakan PropTypes untuk type checking

<br>
Terima kasih
