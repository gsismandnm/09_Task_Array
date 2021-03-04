//STUDENTS İSİMLİ LİSTEYİ REQUIRE İLE IMPORT ETTİK.
const {students} =require ("./data");

//SONUC İSİMLİ BİR DEĞİŞKEN TANIMLADIK. BUNUN İÇİNDE YAŞI 40'A EŞİT OLANLARI BULDURDUK.
//NOT: FIND İLE ARRAY İÇİNDEKİ İLK DEĞERİ BULUYOR.
    let sonuc = null;

    sonuc = students.find (item  => item.yasi >= 40);

    console.table (sonuc);