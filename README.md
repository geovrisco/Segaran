## Segaran App Documentations.
### 1. About This App (EN)
This app intended to help a certain organization (in this case my church) to manage its congregation.
this app also included a tool to publish (create, read, update, delete) daily devotional message, or notification. 
I also include push notification for mobile app each time an admin post something either its devotional message or notification for congregation.
you are free to use or modify this app, you dont have to give me credits too

this app using react (web) as admin tools for posting notification, and react native (tested on android) for congregation's client

### 1. Tentang Applikasi ini (ID)
aplikasi ini diharapkan dapat membantu organisasi tertentu (saat ini untuk gereja lokal saya), untuk mengelola data jemaat.
dalam applikasi ini juga dilengkapi sebuah alat untuk menerbitkan artikel renungan harian maupun pengumuman untuk jemaat, serta tiap kali
admin menerbitkan sesuatu baik pengumuman maupun renungan harian, applikasi ini akan melakukan push notification ke mobile app.

kalian bisa memodifikasi client maupun server.
applikasi ini menggunakan react untuk tools admin dan react-native untuk client jemaat.

### 2. Development Notes / Known Bugs (EN)
#### this is not a final product!
this is the list of what i've created (on the development branch ofc)
#### 2.1 Backend / Server Side 
i think i've covered everything that i need in this apps
1. CRUD for article/notification and member/congregation
2. Handle Expo Token and Expo Push notification

#### 2.2 Front-End Mobile Client
mobile client developed with react-native and ONLY tested in on my Phone (honor play)
#### finished 
1. register and update member profile
2. handle notification
3. read article and every single article
#### things to do
1. UI still trash (im going to use material ui template to fix this)
2. i think im going to implement redux to fixed authentication flow,
3. integrate youtube API (this will be the lowest priority)
somehow my state doenst change when i update it with data that saved in asyncStorage

#### 2.3 Front-End Web Client
this web apps intended for admin and admin only to CRUD notification and devotional message.
#### finished
1. create and read notification data
2. authentication

#### things to do
1. mostly CRUD.


### 2. Development Notes / Known Bugs (ID)
#### this is not a final product!
hal hal yang sudah diselesaikan cek di branch Development
#### 2.1 Backend / Server Side 
Sepertinya backend sudah selesai semua
1. CRUD untuk notifikasi/pengumuman dan data jemaat
2. Handle Expo Token and Expo Push  -> untuk push notification

#### 2.2 Front-End Mobile Client
untuk saat ini mobile client didevelop dengan menggunakan React-Native dan HANYA di uji lewat HP (honor play)
#### Fitur yang selesai: 
1. daftar, login , dan update profil
2. handle notification
3. menampilkan list-list artikel/ pengumuman dan melihat detailnya
#### fitur yang akan diperbaiki/ ditambah
1. UI/ tampilan masih sederhana sekali
2. mungkin akan menggunakan redux untuk memperbaiki flow authentikasi karena ada beberapa bug seperti
state yang dibuat tidak terupdate ketika user login (harus tutup dan buka lagi) dan tidak bisa di set dari asyncStorage

#### 2.3 Front-End Web Client
client ini didevelop menggunakan react (web) dan digunakan oleh user-admin untuk mempublikasikan artikel/pengumuman.
#### Fitur yang selesai:
1. create dan read pengumuman/artikel
2. autentikasi / login admin

#### fitur yang akan diperbaiki/ ditambah
1. mostly CRUD.

```

```