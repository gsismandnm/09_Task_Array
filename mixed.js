//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}= require ("./data");

//İSTEDİĞİMİZ DEĞERLER ÜZERİNDE İŞLEM YAPMAYA YARAR. 
//ÖRNEKTE 2000 YILINDAN SONRA MÜHENDİSLİKTEN MEZUN OLAN ÖĞRENCİLERİN KAÇ YIL ÖNCE MEZUN OLDUKLARINI BULDUK.

const sonuc = students.filter (item => item.bolum=="mühendislik" & item.baslamaTarihi >2000).map(item => {
    return{
        id:item.id,
        adi:item.adi,
        bolum:item.bolum,
        yasi:item.yasi,
        baslamaTarihi:item.baslamaTarihi,
        bitirmeTarihi:item.bitirmeTarihi,
        bitirmeZamanı:2021-item.bitirmeTarihi,
    }
});

console.table (sonuc);