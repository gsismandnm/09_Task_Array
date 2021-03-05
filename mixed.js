//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students}= require ("./data");

//İSTEDİĞİMİZ DEĞERLER ÜZERİNDE İŞLEM YAPMAYA YARAR. 
//ÖRNEKTE 2000 YILINDAN SONRA MÜHENDİSLİK VE İBBF'DEN MEZUN OLAN ÖĞRENCİLERİN GÜNÜMÜZDEN KAÇ YIL ÖNCE MEZUN OLDUKLARINI BULDUK.

const sonuc = students.filter (item => item.bolum=="mühendislik" || item.bolum == "iibf").map(item => {
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