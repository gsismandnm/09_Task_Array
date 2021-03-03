//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students} =require ("./data");

//ÖĞRENCİLERİN YAŞLARININ TOPLAMINI BULDUK.

const toplamSonuc= students.reduce ((toplam, mevcut) => {
    return toplam + mevcut.yasi;
}, 0);

console.log (toplamSonuc);

//ÖĞRENCİLERİN YAŞLARININ ORTALAMASI İÇİN TOPLAM 11 ÖĞRENCİ OLDUĞU İÇİN TOPLAMI 11'E BÖLDÜK.
console.log (toplamSonuc/11);
