//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students} =require ("./data");
const {studentsNot}=require ("./data");

//SONUC İSİMLİ BİR DEĞİŞKEN TANIMLADIK. BUNUN İÇİNDE YAŞI 40'A EŞİT OLANLARI BULDURDUK.
//SONUC2 İSİMLİ BİR BAŞKA DEĞİŞKEN TANIMLADIK. BUNUN İÇİNDE DE KİMYA NOTU 50 ÜZERİNDE OLANLARI LİSTEDİK.
//NOT: FIND İLE ARRAY İÇİNDEKİ İLK DEĞER BULUNUYOR.
    let sonuc = null;
    let sonuc2 = null;

    sonuc = students.find (item  => item.yasi >= 40)    
    sonuc2 = studentsNot.find (item=> item.kim>50);

    console.table (sonuc);
    console.table(sonuc2);