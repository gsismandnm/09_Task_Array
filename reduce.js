//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students} =require ("./data");
const {studentsNot} =require("./data");

//ÖĞRENCİLERİN YAŞLARININ TOPLAMINI BULDUK. 2500 YAZILI BÖLÜM KAÇTAN TOPLAMAYA BAŞLAYACAĞINI GÖSTERİR.
const toplamSonuc= students.reduce ((toplam, mevcut) => {
    return toplam + mevcut.yasi;
}, 0);

console.log ("Öğrencilerin Yaşları Toplamı:" + toplamSonuc);

//ÖĞRENCİLERİN YAŞLARININ ORTALAMASI İÇİN TOPLAM 11 ÖĞRENCİ OLDUĞU İÇİN TOPLAMI 11'E BÖLDÜK.
console.log ("Öğrencilerin Yaşları Ortalaması:" + toplamSonuc/11);

//ÖĞRENCİLERİN MATEMATİK NOTLARININ TOPLAMANI BULDUK. 
//SONRASINDA ÖĞRENCİ SAYISINA BÖLEREK ORTALAMASINI BULDUK.

const toplamSonuc2= studentsNot.reduce ((toplam2, mevcut2) => {
    return toplam2 + mevcut2.mat; 
}, 0);

console.log ("Matematik Notları Toplamı:" + toplamSonuc2);
console.log ("Matematik Notlarının Ortalaması:" + toplamSonuc2/11);
