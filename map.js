//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.

const {students}=require("./data");

//ÖĞRENCİLERİN KAÇ YILDA MEZUN OLDUKLARIN BULACAĞIZ. BİTİŞ-BAŞLANGIÇ TARİHİ.

const sonuc = students.map (item  =>{
    return{
            id:item.id,
            adi:item.adi,
            cinsiyeti:item.cinsiyeti,
            bolum:item.bolum,
            yasi:item.yası,
            baslamaTarihi:item.baslamaTarihi,
            bitirmeTarihi:item.bitirmeTarihi,
    }
}).filter(item => item.bolum == "mühendislik").map(item => {
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