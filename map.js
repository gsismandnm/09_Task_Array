//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.

const {students}=require("./data");

//STUDENTS TABLOSUNDAN VERİLERİ AYNI ŞEKİLDE YENİ (NEW) BİR TABLOYA MAP YAPTIK.
//SONRA BU TABLO İÇİNDE MÜHENDİSLİK BÖLÜMÜ VE BAŞLAMA TARİHİ 1993 OLANLARI  FİLTRELEDİK.
//SON OLARAK DA BAŞLANGICI 1993 OLAN MÜHENDİSLİK BÖLÜMÜ ÖĞRENCİLERE ÜNİVERSİTE OLARAK ODTÜ İLAVE ETTİK.

const sonuc = students.map (item  =>{
    return{
            id:item.id,
            adi:item.adi,
            cinsiyeti:item.cinsiyeti,
            bolum:item.bolum,
            yasi:item.yasi,
            baslamaTarihi:item.baslamaTarihi,
            bitirmeTarihi:item.bitirmeTarihi,
    }
}).filter(item => item.bolum == "mühendislik" & item.baslamaTarihi==1993).map(item => {
        return{
            id:item.id,
            adi:item.adi,
            cinsiyeti:item.cinsiyeti,
            bolum:item.bolum,
            yasi:item.yası,
            baslamaTarihi:item.baslamaTarihi,
            bitirmeTarihi:item.bitirmeTarihi,
            universite:"ODTÜ",
        }
});

console.table (sonuc);