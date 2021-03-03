//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}= require ("./data");

//KOŞULU KAÇINCI ELEMENTTE BULURSA ORADAKİ SAYIYI SÖYLER. 
//ÖRNEKTE 2017 DEĞERİN 5'NCİ ELEMETTE BULDUĞU İÇİN 5 DÖNER.
//HİÇBİR DEĞER BULAMAZSA -1 SONUCUNU DÖNER.

const sonuc = students.findIndex (item => item.baslamaTarihi == 2017);

console.table (sonuc);