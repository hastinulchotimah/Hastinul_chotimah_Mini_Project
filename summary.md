# Resume Tugas React Router

1. router merupakan  modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (single page application) 
2. multi page application atau MPA disebut juga dengan tradisional web app  adalah jenis  aplikasi website dimana perlu memuat  ulang seluruh halaman web setiap kali memuat ulang seluruh halaman web setiap kali membuat permintaan baru 
3. single page application SPA adalah salah satu jenis aplikasi  website dimana hanya ada satu halaman  yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut 
4.  *keunggulan nya SPA
=>  waktu loading website jauh lebih cepat 
=> tidak ada query tambahan keserver 
=> front end yang cepat dan responsif 
=> meningkatan pengalaman pengguna user 
 *kekurangan
=> tidak bagus dalam hal SEO 
=> berat saat diload/dibuka pertamakali 
=> kurang aman dibandingkan website biasa
=> masalah kompatabilitas browser 
5. * keunggulan MPA
=>  SEO website akan lebih mudah  dioptimasikan
=> memudahkan mu untuk mengubah halman tertentu  untuk setiap kebutuhan yang berbeda
=> menggunakan tools analisis seperti google  analytics yang dapat terintegrasi  langsung dengan website  
*kekurangan
=> kecepatan download website jauh lebih lama jika dibandingkan  dengan SPA 
=> perlu menginstegrasikan antara front end dan back end  
=> lebih sering membutuh kan  maintenance dan update 
=> lebih sering menemukan masalah peprforma pada website  
6. browser router digunakan sbg router yang menggunakan API history dari  HTML5 , sehingga dapat menggunakan location untuk sincronkan  UI dengan Url . didalam object location sendiri mempresentasikan dimana aplikasi lokasi sekarang.
7. =>  route digunakan sebagai  pengarah jalannnya lalu lintas sebuah aplikasi web .
    =>  atribut path merupakan url pada browsher  pada proses routing  .
    => atribut component merupakan  suatu komponen  yang akan ditampilkan kepada user  saat  mengakses path yang didefenisikan

8. =>Switch digunakan untuk membungkus kumpulan beberapa  component route 
=> exact bertugas untuk memastikan route hanya  merender component yang memiliki path  yg cocok , jika tidak ada yang cocok , maka route  yang akan merender  yaiu route  terakhir dengan  component not found .
=> link digunakan untuk berpindah  antara halaman  property  to tersebut merujuk pada path diroute yang akan dituju .
=> element kosong <></> trsebut adalah short hand  dari < React .Fragment><React.Fragment> yang mana bisa untuk membungkus child element tanpa menambahkan node kedalam DOM.
9.URL parameter  suatu parameter yang nilainya ditetapkan secara dinamis di Url Halaman .
10. Hook routing React 
=> useHistory memberikan kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi 
Contoh; 
Length => (angka) jumlah entri dalam tumpuk riwayat 
Go =>  (fungsi) memindahkan penunjuk  ditumpukan riwayat sebanyak entri 
Goback => (fungsi) setara dengan go-1
goForward => (fungsi) setara dengan go-1
Push => (fungsi) mengganti entri saat ini ditumpuk diriwayat history



