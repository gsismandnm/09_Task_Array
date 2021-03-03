//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.

const { students } = require("./data");

//SONUC DİYE BİR DEĞİŞKEN TANIMLADIK. 
//BU DEĞİŞKENE İD NUMARASI 6 VE DAHA BÜYÜK OLANLARI TABLODA LİSTELETTİK.

let sonuc = null;

sonuc = students.filter(item => item.id >= 6);

console.table (sonuc);