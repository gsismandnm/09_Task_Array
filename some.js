//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}=require("./data");

//DİZİNDEKİ ELEMANLARDAN EN AZ BİRİ BU KURALA UYUYORSA TRUE, UYMUYORSA FALSE DEĞERİNİ ALIR.
//ÖĞRENCİLERDEN İSMİ KEREM OLAN VAR MI KONTROL EDECEĞİZ.
//LİSTEMİZDE EKREM İSİMLİ ÖĞRENCİ OLMADIĞI İÇİN BİZE FALSE DÖNECEK.

const sonuc = students.some(item => item.adi=="Ekrem");

console.log (sonuc);