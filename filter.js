//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.

const { students } = require("./data");
const {studentsNot}= require ("./data");

//SONUC VE SONUC 2 DİYE İKİ DEĞİŞKEN TANIMLADIK. 
//SONUÇ DEĞİŞKENİNE İD NUMARASI 6 VE DAHA BÜYÜK OLANLARI TABLODA LİSTELETTİK.
//SONUC2 DEĞİŞKENİNE DE İD2 NUMARASI 3 VE DAHA BÜYÜK OLANLARI TABLODA LİSTEDİK.

let sonuc= null

let sonuc2 = null


sonuc = students.filter(item => item.id >= 6);
sonuc2=  studentsNot.filter (item =>item.id2>=3);

console.table (sonuc);
console.table (sonuc2);